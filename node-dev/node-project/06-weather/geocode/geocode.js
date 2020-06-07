const request = require('request');

const goole_api_key = "AIzaSyDEQwf-KUI91aI3Nfv7T4Pc1ADijOtBAaw";
const host = "https://maps.googleapis.com/maps/api/geocode/json";

var getGeocodeAddress = (address, callback) => {
  var url = `${host}?address=${encodeURIComponent(address)}&key=${goole_api_key}`;

  request({url: url, json: true}, (err, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2)); // third parameter is number of spaces indent
    if (err)
      callback("There's an error happen.");
    else if (body.status === "ZERO_RESULTS")
      callback("Address not found.");
    else if (body.status === "OK")
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
  });
};

// module.exports = {
//   getGeocodeAddress
// }
// OR
module.exports.getGeocodeAddress = getGeocodeAddress;
