let a = {
  text: 'Hello',
  print: function() {
    console.log(this.text);
  }
}

a.print();

let b = {
  text: 'Hi',
  print: function() {
    console.log(this.text);
  }
}

b.print();

a.print = b.print;
a.print();

let c = {
  text: 'Chiao',
  print: () => {
    console.log(this.text);
  }.bind(this);
}

c.print();
a.print = c.print;
a.print();
