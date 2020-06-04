var sum = function(a, b) {
  return a + b;
}
console.log(sum(4, 5))


// The other way is function declaration statement.
function hello() {
  console.log('hello')
}

// Function declaration statements differ from function definition expressions in that they
// include a function name. Both forms create a new function object, but the function
// declaration statement also declares the function name as a variable and assigns the
// function object to it. Like variables declared with var, functions defined with function
// definition statements are implicitly “hoisted” to the top of the containing script or
// function, so that they are visible throughout the script or function. With var, only the
// variable declaration is hoisted—the variable initialization code remains where you
// placed it. With function declaration statements, however, both the function name and
//the function body are hoisted: all functions in a script or all nested functions in a 
// function are declared before any other code is run. This means that you can invoke a 
// JavaScript function before you declare it.
