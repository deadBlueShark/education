// With the 'process' object, we can get environment information, read environment
// variables, communicate with the terminal or parent processes through standard
// input, standard output, exit the current process ...

console.log(`Current process ID: ${process.pid}`);
console.log(`Current Node version is being used: ${process.versions.node}`);

// node process.js --user "Le Chi Nguyen" --greeting Hello
console.log(process.argv);
// Grab CLI variables version 1
console.log(`${process.argv[5]} ${process.argv[3]}`);


// Grab CLI variables version 2, allow users to pass arguments in any particular order.
let grabCLIVar = (key) => {
  let indexAfterKey = process.argv.indexOf(key) + 1; // Index of the value the key
  return process.argv[indexAfterKey];
}

let name = grabCLIVar('--user');
let greet = grabCLIVar('--greeting');
console.log(`${greet} ${name}`);
