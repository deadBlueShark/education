let waitTime = 5000;
let currentTime = 0;
let waitInterval = 500;

// Make a progress bar on Termimal
let interval = setInterval(() => {
  currentTime += waitInterval;
  let percentage = Math.floor(currentTime / waitTime * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write('Waiting: [')
  process.stdout.cursorTo(110);
  process.stdout.write(']')
  process.stdout.write(` ${percentage}%`);

  process.stdout.cursorTo(10);
  for (let i = 0; i < percentage; i++) {
    process.stdout.write('=');
  }
}, waitInterval);

setTimeout(() => {
  clearInterval(interval);
  console.log('\nDone');
}, waitTime + 100);
