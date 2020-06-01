// Impact of hoisting
var scope = 'global'

function f () {
  console.log(scope)  // Prints "undefined", not "global"
  var scope = 'local' // Variable initialized here, but defined everywhere
  console.log(scope)   // Prints "local"
}

f()

// is read by compiler as below
// function f() {
//   var scope
//   console.log(scope)
//   scope = 'local'
//   console.log(scope)
// }
