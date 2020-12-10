'use strict';

const days = ['Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const today = new Date();
const localDate = today.toLocaleDateString();
const DOWValue = today.getDay();
const DOWName = days[DOWValue];
const reportDate = () => {
  console.log(`Today is ${DOWName} ${localDate}`);
};

reportDate();
