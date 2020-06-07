const colors = ['Red', 'Green', 'Blue'];

// Normal for
for(let i = 0, max = colors.length; i < max; i++) {
  console.log(colors[i]);
}
// For...in
for(let index in colors) {
  console.log(colors[index]);
}
// For...of
for(let color of colors) {
  console.log(color);
}

// forEach() will loop through the array and invoke a callback function using each value as an argument. 
// The callback function takes three parameters, the first represents the value in the array, the second 
// represents the current index and the third represent the array that the callback is being called on.
colors.forEach(function(color) {
  console.log(color);
});

// map
colors.map(function(color) { 
  return color.toUpperCase(); 
}).forEach((upperColor) => console.log(upperColor));

// The initial value of sumSoFar is the first item in array, or you can specify as the second parameter of reduce()
let sum = [1, 2, 3, 4, 5].reduce(function(sumSoFar, currentValue) {
  return sumSoFar + currentValue;
})
console.log(sum);

let odds = [1, 3, 4, 5, 6].filter(function(value) {
  return value % 2;
})
console.log(odds);
