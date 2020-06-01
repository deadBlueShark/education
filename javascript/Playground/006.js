let text = 'My birthday is at 18-06-1993'
let pattern = /\d+/g

console.log(pattern.test(text))  // true: a match exists
console.log(text.search(pattern)) // 18: position of first match
console.log(text.match(pattern)) // [ '18', '06', '1993' ]: array of all matches

console.log(text.replace(/\d/g, '#'))  // My birthday is at ##-##-####
console.log(text)  // My birthday is at 18-06-1993
