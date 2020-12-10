'use strict';

const formData = ['55', true, undefined];

formData.forEach((el) => {
  console.log(`\n${el}:`);
  console.table({
    // 'new Number()': {
    //   result: `${new Number(el)}`, 
    //   'data type': `${typeof new Number(el)}`,
    // },
    'Number()': { 
      result: `${Number(el)}`, 
      'data type': `${typeof Number(el)}`,
    },
  });
});