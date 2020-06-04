// Function that returns a promise
function addNumber(a, b) {
  return new Promise(resolve => {
    setTimeout(() => resolve(a + b), 2000);
  })
}

// V1: using then - catch promise
function application1() {
  addNumber(2, 3).then((res) => console.log(res));
}

application1();

// V2: using async - await
async function application2() {
  let sum = await addNumber(3, 4);
  console.log(sum);
}

application2();
