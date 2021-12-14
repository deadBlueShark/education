let sumArgs = (...args) => args.reduce((a, b) => a + b, 0)
// let sumArgs = (...args) => args.reduce((a, b) => a + b) still ok

console.log(sumArgs(1, 2, 3, 4, 5))
