function outer() {
  var outerVar = 'Nguyen';
  function inner(text) {
    console.log(`${outerVar} ${text}`);
  }
  return inner;
}

let a = outer();
a('Hello')
a('HI')
