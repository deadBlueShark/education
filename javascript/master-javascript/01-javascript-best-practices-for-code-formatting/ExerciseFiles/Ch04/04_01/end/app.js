'use strict';

const formData = [55, undefined];

formData.forEach((el) => {
  console.log(`\n${el}:`);
  console.table({
    // 'new String()': {
    //   result: `${new String(el)}`, 
    //   'data type': `${typeof new String(el)}`,
    // },
    // toString: { 
    //   result: `${el.toString()}`, 
    //   'data type': `${typeof el.toString()}`,
    // },
    'String()': {
      result: `${String(el)}`, 
      'data type': `${typeof String(el)}`,
    },
  });
});