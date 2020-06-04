// Within JS file, all of the variables are scoped to that module, so the files
// that consume this module won't have access to the variable
let i = 0;

let increment = () => i++;
let decrement = () => i--;
let getCount = () => i;

module.exports = {
  increment,
  decrement,
  getCount
}
