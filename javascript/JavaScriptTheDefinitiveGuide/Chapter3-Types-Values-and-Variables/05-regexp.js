var str = 'hello 1, 2, 3';
var pattern = /\d+/g;

// Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
console.log(pattern.test(str)); // true

// Finds the first substring match in a regular expression search.
// Return the position of the first match, return -1 if no match
console.log(str.search(pattern)); // 6

// Matches a string an object that supports being matched against, 
// and returns an array containing the results of that search.
console.log(str.match(pattern)); // ['1', '2', '3']

console.log('Js, i love js, because js is so cool!'.match(/\bjs\b/g));
