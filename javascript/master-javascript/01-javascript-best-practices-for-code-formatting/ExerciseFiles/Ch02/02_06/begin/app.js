'use strict';

let days = ['Sunday', 
  'Monday', 
  'Tuesday', 
  'Wednesday', 
  'Thursday', 
  'Friday', 
  'Saturday'
],
 times_of_day = [
  'morning',
  'afternoon',
  'evening',
  'night',
],
 today = new Date();
const local_date = today.toLocaleDateString();
const Dow_value = today.getDay();
const Dow_name = days[Dow_value];
var report_date = () => {
  console.log(`Today is ${Dow_name} ${local_date}`);
};

report_date();
