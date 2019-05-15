{
  let a = {
    text: 'Hello',
    print: function() {
      console.log(this.text);
    }
  }

  a.print(); // Hello

  let b = {
    text: 'Hi',
    print: function() {
      console.log(this.text);
    }
  }

  b.print();  // Hi

  a.print = b.print;
  a.print();  // Hello

  let c = {
    text: 'Chiao',
    print() {
      console.log(this.text);
    }
  }

  c.print();  // Chiao

  a.print = c.print;
  a.print();  // Hello
}
