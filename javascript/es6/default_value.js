function addCalendarEntry(event, date = new Date().getTime(), len = 60, timeout = 1000) {

}

function printArgs() {
  console.log(arguments)
}

printArgs(1, 2, 3) // [Arguments] { '0': 1, '1': 2, '2': 3 }

// Bear in mind that the arguments array is not affected by the default parameter values in any way

function greet(a = 'hello') {
  console.log(arguments)
}

greet() // Arguments] {}
greet('hi') // [Arguments] { '0': 'hi' }


// the second argument of printComment has a default value that’s initially 1,
// and is incremented by 1 after each call
let init = 0
function printComment( comment, line = ++init) {
    console.log( line, comment );
}

for (var i = 1; i <= 5; i++)
  printComment('I should be lineNumber ' + i);
