function fibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

setTimeout(() => {
  console.log('hello');
})

console.log(fibonacci(44))

// Node.js is not the best option if you have a high CPU task that you need to do on a client
// request in a multiclient server environment
