console.log("Wait for it");
let i = 0;

function progressBar(percent) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Inprogress: ${"#".repeat(percent)} ${percent}%`);
}

let interval =  setInterval(() => {
  progressBar(++i);
  if (i == 99) {
    process.stdout.write('\nFailed! Leu leu\n');
  }
}, 100);

setTimeout(() => {
  clearInterval(interval);
}, 10000);

setTimeout(() => {
// console.log('At the bottem of program.');
}, 3000);
