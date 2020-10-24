var a = {x: 1, y: 2, z: 3}
for (key in a) {
  console.log(typeof key); // string, so you can't use a.key below
  console.log(`Value of ${key} is ${a[key]}`);
}

var b = Object.create(a); // a is a prototype of b
b.a = 4;
for (key in b) {
  console.log(`${key}: ${b[key]}`);
}
// a: 4
// x: 1
// y: 2
// z: 3

// Filter inherited properties
for (key in b) {
  if (!b.hasOwnProperty(key)) continue;
  console.log(`Own element: ${key}: ${b[key]}`);
}
// Own element: a: 4
