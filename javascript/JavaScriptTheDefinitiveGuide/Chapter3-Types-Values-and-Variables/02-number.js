console.log(9/0); // Infinity
console.log(-9/0); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// The largest number that can be represented in JavaScript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 

// The closest number to zero that can be represented in JavaScript
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

var x = NaN;
// This expression will be true if, and only if, x is NaN
console.log(x != x); // true

console.log(isNaN(NaN)); // true

console.log(isFinite(4)); // true
console.log(isFinite(NaN)); // false
console.log(isFinite(-Infinity)); // false
