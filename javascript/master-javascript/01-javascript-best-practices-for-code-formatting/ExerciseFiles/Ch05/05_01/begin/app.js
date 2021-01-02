'use strict';

const data = [0, '', false, null];

data.forEach((el) => {
  if (el == '0') {
    console.log(`${el} == '0'`);
  } 
  if (el == undefined) {
    console.log(`${el} == undefined`);
  } 
});
