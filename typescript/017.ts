class Context {
  token: string;

  constructor() {
    this.token = 'token';
  }

  doSomething() {
    console.log(this.token);
  }
}

let context = new Context();
context.doSomething();
// lose context when using as callback
setTimeout(context.doSomething, 100);
// preseve context using bind
setTimeout(context.doSomething.bind(context), 100);
// preseve context using arrow function
setTimeout(() => context.doSomething() , 100);
// preseve context by nest desire function inside a function
setTimeout(function() {
  context.doSomething();
}, 100)

