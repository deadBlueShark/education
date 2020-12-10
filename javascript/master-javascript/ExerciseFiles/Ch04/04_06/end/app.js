'use strict';

const data = {
  tempC: '24',
  conditions: 'windy',
  alert: 'false',
};

const cToF = (c) => ((c * 1.8) + 32);

// cast data.tempC to a number
const tempF = cToF(Number(data.tempC));
const alert = (data.alert === 'true') ? true : false;

console.log(`Celsius: ${data.tempC}`);
// cast tempF to a string
console.log(`Fahrenheit: ${String(tempF)}`);
console.log(`Alert? ${(alert) ? 'yes' : 'no'}`);
