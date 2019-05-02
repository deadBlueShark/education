class LoseContext {
  numbers: number[];
  token: string;

  constructor() {
    this.numbers = [1, 3, 4];
    this.token = 'Akf4fsd';
  }

  loseContext() {
    setTimeout(function() {
      console.log(this.numbers); // undefined
    }, 1000);
  }

  preserveContextUseBind() {
    setTimeout(function() {
      console.log(this.numbers);
    }.bind(this), 1000);
  }

  preserveContextUseBindMoreNested() {
    setTimeout(function() {
      this.numbers.forEach(function(e) {
        console.log(this.token + e);
      }.bind(this))
    }.bind(this), 1000);
  }

  preserveContextUseArrowFunction() {
    setTimeout(() => {
      console.log(this.numbers);
    }, 1000);
  }
}

let lose = new LoseContext();
lose.loseContext();
lose.preserveContextUseBind();
lose.preserveContextUseBindMoreNested();
lose.preserveContextUseArrowFunction();
