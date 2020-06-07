const request = require('request');

const darksky_key = "27c1f9ca342c8cb796269510c2b90bd7";
const host = "https://api.darksky.net/forecast";

var getCurrentWeather = (coordinate, callback) => {
  var url = `${host}/${darksky_key}/${coordinate.lat},${coordinate.lng}`;

  request({url: url, json: true}, (err, response, body) => {
    if (err)
      callback("Unable to connect to Darksky.");
    else if (response.statusCode === 200)
      callback(undefined, {
        summary: body.currently.summary,
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    else
      callback('Unable to fetch weather.');
  });

};

module.exports.getCurrentWeather = getCurrentWeather;
