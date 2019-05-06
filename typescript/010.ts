let test = {
  text: 'Hello',
  run: function() {
    setTimeout(function() {
      console.log(this.text);
    }, 1000);
  }
}

// Lose context
test.run();  // undefined

let testWithArrowFunction = {
  text: 'Hihi',
  run: function() {
    setTimeout(() => {
      console.log(this.text);
    }, 1000);
  }
}

// Preserved context
testWithArrowFunction.run(); // Hihi
