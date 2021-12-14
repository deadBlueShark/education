/*
In ES6, Object.is(a, b) provides same value equality,
which is almost the same as === except the following differences:

Object.is( +0, -0 ) is false, while -0 === +0 is true
Object.is( NaN, NaN ) is true, while NaN === NaN is false
*/

console.log(Object.is( +0, -0 )) // is `false`, while
console.log(-0 === +0)           // is `true`

console.log(Object.is( NaN, NaN ))    // is `true`, while
console.log(NaN === NaN)         // is false
