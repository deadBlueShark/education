'use strict'

const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
const mime = require('mime')
const aws = require('aws-sdk')
const s3= new aws.S3()

function convert(bucket, filePath) {
  const fileName = path.baseName(filePath)

  return s3.getObject({
    Bucket: bucket,
    Key: filePath
  }).promise().then((res) => {
    return new Promise((resolve, reject) => {
      if (!fs.existsSync('/tmp/images/'))
        fs.mkdirSync('/tmp/images/')
      if (!fs.existsSync('/tmp/thumbnails/'))
        fs.mkdirSync('/tmp/thumbnails/')
      const localFilePath = path.join('/tmp/images/'. fileName)
    })
  })
}
