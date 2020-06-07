console.log(process.argv);

function grab(flag) {
  let index = process.argv.indexOf(flag);
  return index === -1 ? null : process.argv[++index];
}

let greeting = grab('--greeting');
let user = grab('--user');

if (user || greeting) {
  console.log(`${user} - ${greeting}`);
} else {
  console.log('Failed');
}
