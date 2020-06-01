/*
 *  Mutable object (reference types)
 */

let point = {
  x: 3,
  y: 9
}
// add new property
point.z = 10
// modify property
point.x = -3
console.log(point) // { x: -3, y: 9, z: 10 }

let a = { x: 1 }
let b = { x: 1 }
console.log(a == b, a === b) // false false

let c = []
let d = c
d[0] = 4
console.log(c[0]) // 4
console.log(c == d, c === d) // true true
