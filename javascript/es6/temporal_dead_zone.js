var guessMe = 2;
console.log("guessMe: "+guessMe);// A: guessMe is 2
( function() {
    console.log("guessMe: "+guessMe);// B: guessMe is undefined (because of hoisting of line 5)
    var guessMe = 5;
    console.log("guessMe: "+guessMe);// C: guessMe is 5
} )();
console.log("guessMe: "+guessMe);// D: guessMe is 2

// the temporal dead zone exists for let, const, and class declarations.
// It does not exist for var, function, and function* declarations.

--------------------------------
// A: guessMe is undeclared
{
    // B: guessMe is uninitialized. Accessing guessMe throws an error
    //console.log(guessMe); <-This gives an error
    let guessMe = 5;
    console.log("guessMe: "+guessMe);// C: guessMe is 5
}
// D: guessMe is undeclared
// The area described by comment B is the temporal dead zone of variable guessMe

