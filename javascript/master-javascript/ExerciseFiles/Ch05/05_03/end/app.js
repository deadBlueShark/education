'use strict';

const data = {
  warning: true,
  warningText: 'Solar flare may disrupt communications',
  notes: '',
  alert: 2,
};

if (data.warning) {
  console.log(data.warningText);
}
if (data.notes !== '') {
  console.log(data.notes);
}
if (data.alert > 0) {
  if (data.alert === 1) {
    console.log('Winter storm');
  } else if (data.alert === 2) {
    console.log('High wind');
  } else if (data.alert === 3) {
    console.log('Hurricane');
  } else if (data.alert === 4) {
    console.log('Heat advisory');
  }   
}
