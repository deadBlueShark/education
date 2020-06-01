// NUMBER, STRING, BOOLEAN, UNDEFINED, OBJECT, ARRAY
// OBJECT
var book = {
    topic: 'JS',
    fat: true
}

// Two way to access object properties
console.log(book.topic);
console.log(book['topic']);

// Set property for object
book.author = 'LCN';
book['date'] = '24-04-2020';
book.content = {};
console.log(book); // {topic: "JS", fat: true, author: "Nguyen", content: {}}

// ARRAY
var primes = [2, 3, 5, 7, 11];
var count = primes.length;
var last_element = primes[count - 1];
