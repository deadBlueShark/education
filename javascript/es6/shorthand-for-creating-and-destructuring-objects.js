let shapeName = "Rectangle", a = 4, b = 3;
let shape = {id: 10, shapeName, a, b};
console.log(shape);
// { id: 10, shapeName: 'Rectangle', a: 4, b: 3 }


// Computed Object Keys
let arr = [1,2,3,4,5];
let experimentObject = {
  [ arr.length ]: 2,
  [ arr ]: 1,
  [ {} ]: 3,
  arr

}
console.log(experimentObject)
/*
{
  '5': 2,
  '1,2,3,4,5': 1,
  '[object Object]': 3,
  arr: [ 1, 2, 3, 4, 5 ]
}
*/
