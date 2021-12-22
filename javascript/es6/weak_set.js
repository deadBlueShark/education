/*
Sets and maps hold a reference of their values. This means that the garbage collector
won’t be able to collect the values in sets, and key-value pairs in maps to free some memory.

This is where weak sets and maps come into play. They only hold weak references to their values,
allowing garbage collection of the values while they are members of a set or map.

Weak sets are similar to regular sets. The main difference is that their elements
may disappear once they are garbage collected
*/

let firstElement = { order: 1 }, secondElement = { order: 2 };
let ws = new WeakSet( [ firstElement, secondElement ] );

console.log('has firstElement: '+ws.has( firstElement ));
//> true

delete firstElement;
// firstElement is removed from the weak set
