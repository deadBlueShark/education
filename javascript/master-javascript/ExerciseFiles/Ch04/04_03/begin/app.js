'use strict';

const formData = ['flower', 0, undefined];

formData.forEach((el) => {
  console.log(`\n${el}:`);
  console.table({
    'new Boolean()': {
      result: `${new Boolean(el)}`, 
      'data type': `${typeof new Boolean(el)}`,
    },
    'Boolean()': { 
      result: `${Boolean(el)}`, 
      'data type': `${typeof Boolean(el)}`,
    },
    '!!': {
      result: `${!!el}`, 
      'data type': `${typeof !!el}`,
    }  
  });
});
