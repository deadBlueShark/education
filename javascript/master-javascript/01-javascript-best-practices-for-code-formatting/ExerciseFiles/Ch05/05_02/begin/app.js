'use strict';

const data = {
  tempC: '24',
  conditions: 'windy',
  alert: '2',
};

let alert = false;
if ('1' === data.alert) {
  alert = 'winter storm';
} else if ('2' === data.alert) {
  alert = 'high wind';
} else if ('3' === data.alert) {
  alert = 'hurricane';
} else if ('4' === data.alert) {
  alert = 'heat advisory';
} 

if (alert) {
  console.log(`Alert: ${alert}`);
}