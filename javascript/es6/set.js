// A Set data structure in ES6 is an ordered list of unique elements

let colors = new Set()
colors.add('red')
colors.add('green')
colors.add('red') // duplicate elements are added only once

console.log(colors)
console.log(colors.size)
console.log(colors.has('red'))
console.log(colors.has('blue')) // = return true|false
console.log(colors.delete('red')) // = return true|false

console.log(colors)

let myColors = new Set(['red', 'blue', 'red', 'orange'])
console.log('myColors', myColors)

// Traverse Set: forEach method, for...of loop

myColors.forEach(value => console.log(`Value: ${value}`))

for (let value of myColors) console.log(`VALUE: ${value.toUpperCase()}`)

// spread to array
console.log([...myColors])

// Write a function that removes all the duplicates from an array.
const removeDuplicatesFromArray = arr => [...new Set(arr)]

// Implement the union, intersection, and difference operations for sets.
let union = ( set1, set2 ) => new Set( [...set1, ...set2] );
let intersection = ( set1, set2 ) => new Set( [...set1].filter(( elem ) => set2.has( elem )) );
let difference = ( set1, set2 ) => new Set( [...set1].filter( ( elem ) => !set2.has( elem )) );
