let test = {
  text: 'Hello',
  run: function() {
    setTimeout(function() {
      console.log(this.text);
    }, 1000);
  }
}

test.run();

let testWithArrowFunction = {
  text: 'Hihi',
  run: function() {
    setTimeout(() => {
      console.log(this.text);
    }, 1000);
  }
}

testWithArrowFunction.run();
