const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./geocode/weather.js');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help().argv;

console.log(argv);
geocode.getGeocodeAddress(argv.address, (errMessage, results) => {
  if (errMessage) {
    console.log(errMessage);
  } else {
    console.log(results.address);
    weather.getCurrentWeather({lat: results.latitude, lng: results.longitude}, (errMess, weatherResult) => {
      if (errMess) {
        console.log(errMess);
      } else {
        console.log(JSON.stringify(weatherResult, undefined, 2));
      }
    });
  }
});
