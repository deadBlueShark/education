// Compress this folder: zip -9 -r ../createThumbnailAndStoreInDB-v1.0.zip *
// aws s3 cp orange.jpg s3://hello-in-action/images/
// Node version 8.10. Increase memory, timeout of lambda

var async = require('async');
var AWS = require('aws-sdk');
var gm = require('gm').subClass({ imageMagick: true }); // Enable ImageMagick integration.
var util = require('util');
var DEFAULT_MAX_WIDTH  = 200;
var DEFAULT_MAX_HEIGHT = 200;
var DDB_TABLE = 'action-images';
var s3 = new AWS.S3();
var dynamodb = new AWS.DynamoDB();

exports.handler = (event, context, callback) => {
  console.log("Reading options from event:\n",
    util.inspect(event, {depth: 5}));
  var srcBucket = event.Records[0].s3.bucket.name;
  var srcKey    = event.Records[0].s3.object.key;
  var dstBucket = srcBucket;
  var dstKey    = "thumbs/" + srcKey;
     var imageType = getImageType(srcKey, callback);
  async.waterfall([
    function downloadImage(next) {
      s3.getObject({ Bucket: srcBucket, Key: srcKey }, next);
    },
    function tranformImage(response, next) {
      gm(response.Body).size(function(err, size) {
        if (err) {
          return next(err);
        }

        var metadata = response.Metadata;
        console.log("Metadata:\n", util.inspect(metadata, {depth: 5}));

        var max_width;
        if ('width' in metadata) {
          max_width = metadata.width;
        } else {
          max_width = DEFAULT_MAX_WIDTH;
        }

        var max_height;
        if ('height' in metadata) {
          max_height = metadata.height;
        } else {
          max_height = DEFAULT_MAX_HEIGHT;
        }

        var scalingFactor = Math.min(
          max_width / size.width,
          max_height / size.height
        );

        var width  = scalingFactor * size.width;
        var height = scalingFactor * size.height;
        this.resize(width, height).toBuffer(imageType, function(err, buffer) {
          if (err) {
            next(err);
          } else {
            next(null, response.ContentType, metadata, buffer);
          }
        });
      });
    },
    function uploadThumbnail(contentType, metadata, data, next) {
      // Stream the transformed image to a different S3 bucket.
      s3.putObject({
        Bucket: dstBucket,
        Key: dstKey,
        Body: data,
        ContentType: contentType,
        Metadata: metadata
      }, function(err, buffer) {
        if (err) {
          next(err);
        } else {
          next(null, metadata);
        }
      });
    },
    function storeMetadata(metadata, next) {
      // adds metadata do DynamoDB
      var params = {
        TableName: DDB_TABLE,
        Item: {
          name: { S: srcKey },
          thumbnail: { S: dstKey },
          timestamp: { S: (new Date().toJSON()).toString() },
        }
      };
      if ('author' in metadata) {
        params.Item.author = { S: metadata.author };
      }
      if ('title' in metadata) {
        params.Item.title = { S: metadata.title };
      }
      if ('description' in metadata) {
        params.Item.description = { S: metadata.description };
      }
      dynamodb.putItem(params, next);
    }], function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log(
          'Successfully resized ' + srcBucket + '/' + srcKey +
          ' and uploaded to ' + dstBucket + '/' + dstKey
        );
      }
      callback();
    }
  );
};

function getImageType(key, callback) {
  var typeMatch = key.match(/\.([^.]*)$/);
  if (!typeMatch) {
    return callback("Could not determine the image type for key: ${key}");
  }
  var imageType = typeMatch[1];
  if (imageType != "jpg" && imageType != "png") {
    return callback('Unsupported image type: ${imageType}');
  }

  return imageType;
}
