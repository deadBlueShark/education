'use strict';

const sessions = {
  'plenary': 'The latest buzz in beekeeping',
  'morning-beginner': 'Hive management 101',
  'morning-expert': 'Advances in mite control',
};

for (const key of Object.keys(sessions)) {
    console.log(`${key}: ${sessions[key]}`);
}
