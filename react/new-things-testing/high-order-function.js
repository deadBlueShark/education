function printText(text) {
  console.log(text);
}

function addTimestamp(fn) {
  const memoizedTime = Date.now();

  return function(arg) {
    console.log(`memoizedTime: ${memoizedTime}`);
    console.log(`Execute at: ${Date.now()}`);
    fn(arg);
    console.log("-----------End");
  }
}

const addTimestamp2 = fn => arg => {
  console.log(`Execute at: ${Date.now()}`);
  fn(arg);
  console.log("-------------End");
}

const timeOutput = addTimestamp(printText);
const timeOutput2 = addTimestamp2(printText);

timeOutput("Hello World");
sleep(2000).then(() => timeOutput("Hello World"));

timeOutput2("Hello Vietnam");


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/*

Here, the printText() function prints our message to the console.
The addTimestamp() function is a higher-order function that can take any other
function as an argument and logs the execution time.

Calling addTimestamp() with printText() as the parameter creates a new
“wrapped” function that has enhanced functionality. It still has the signature
of the original printText() function but it now also prints the timestamp.

*/
