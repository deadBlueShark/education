// Object Property - Shorthand Notation
var language = 'Markdown';
var extension = 'md';
var fileName = 'Destructuring';

var file = {
    language: language,
    extension: extension,
    fileName: fileName
};

// equivalent:
var file1 = {
    language,
    extension,
    fileName
}

console.log('=============')

// Destructuring

let user = {
    name        : 'Ashley',
    email       : 'ashley@ilovees2015.net',
    lessonsSeen : [ 2, 5, 6, 7, 9 ],
    nextLesson  : 10
};

// because of short-hand notation
let {email, nextLesson} = user;
// equivalent:
// let {email: email, nextLesson: nextLesson} = user;
console.log(user);
console.log(email);
console.log(nextLesson);

// equivalent with the following ES5 assignments:
// let email = user.email
// let nextLesson = user.nextLesson

console.log('=============')

// The value of a destructuring assignment of the form L = R is R:
console.log({email, nextLesson} = user)

// output:
// { name: 'Ashley',
//   email: 'ashley@ilovees2015.net',
//   lessonsSeen: [ 2, 5, 6, 7, 9 ],
//   nextLesson: 10 }

let user2 = {email, nextLesson} = user;
console.log( user2 === user, user2.name ); // true Ashley

console.log('=============')
// Get 's' element

let x = { A: [ 't', 'e', 's', 't' ] };
let {A: [ , , A_2 ]} = x;
console.log(A_2)
