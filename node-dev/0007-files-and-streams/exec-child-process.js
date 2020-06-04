const cp = require('child_process');

cp.exec('node -v', (err, data, stderr) => {
  console.log(stderr);
  if (err) throw err;

  console.log(data);
});
