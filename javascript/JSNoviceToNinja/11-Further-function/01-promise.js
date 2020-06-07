const promise = new Promise((resolve, reject) => {
  if (randomBeetween(0, 1)) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

promise.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})

function randomBeetween(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
