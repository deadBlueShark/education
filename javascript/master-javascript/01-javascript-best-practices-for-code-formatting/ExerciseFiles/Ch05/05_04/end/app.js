'use strict';

const data = {
  warning: true,
  warningText: 'Solar flare may disrupt communications',
};
const nullWarning = 'No warning message at this time';
const warning = data.warning;
const text = data.warningText;

console.log(`Warning: ${(warning) ? text : nullWarning}`);
