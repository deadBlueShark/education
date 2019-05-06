let firstName = 'Chris';
{
  let firstName = 'Tudor';
  console.log('Name 1 (let): ' + firstName); // Tudor
}
console.log('Name 2 (let): ' + firstName);   // Chris

var lastName = 'Chris';
{
  var lastName = 'Tudor';
  console.log('Name 1 (var): ' + lastName);  // Tudor
}
console.log('Name 2 (var): ' + lastName);    // Tudor
