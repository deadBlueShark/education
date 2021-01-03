'use strict';

const data = {
  tempC: '24',
  conditions: 'windy',
  alert: '2',
};

let alert = false;
if (data.alert === '1') {
  alert = 'winter storm';
} else if (data.alert === '2') {
  alert = 'high wind';
} else if (data.alert === '3') {
  alert = 'hurricane';
} else if (data.alert === '4') {
  alert = 'heat advisory';
} 

if (alert) {
  console.log(`Alert: ${alert}`);
}