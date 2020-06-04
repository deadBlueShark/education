// Strings are not objects, so why do they have properties

// Whenever you try to refer to a property of a string s, JavaScript converts the string value to an object as if by
// calling new String(s). This object inherits string methods and is used to resolve the property reference. Once the 
// property has been resolved, the newly created object is discarded.
var name = 'Nguyen';
console.log(name.length);

name.len = 4;
console.log(name.len); // undefined -> because the above line just create a temporary object and set 'len' property 
                       // then it's discarded. This line creates a new string object from the original string and 
                       // try to read the 'len' property
console.log(typeof 3, new Number(3))
