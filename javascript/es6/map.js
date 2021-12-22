// Maps represent key-value pairs, similar to objects.

/*
You may be wondering why we need a map data structure if objects can also be used as maps.
The answer is simple: maps can have keys of any type, and the keys are not converted to strings.
Therefore, 0 and '0' are two different, and valid keys.
*/

let horses = new Map()
horses.set(8, 'Chocolate')
horses.set(3, 'Filippone')

// As the set method is chainable, the above code is equivalent to

// let horses = new Map().set( 8, 'Chocolate' ).set( 3, 'Filippone' )

console.log(horses) // Map(2) { 8 => 'Chocolate', 3 => 'Filippone' }

let people = new Map( [['nguyen', 28], ['david', 39 ]] );

console.log(people.has('nguyen')) // true
console.log(people.size) // 2
console.log(people.get('nguyen')) // 28
console.log(people.delete('nguyen')) // true

console.log(people) // Map(1) { 'david' => 39 }

horses.forEach((value, key) => console.log(`${value}: ${key}`))
for (let [key, value] of horses) console.log(`${value}: ${key}`)

