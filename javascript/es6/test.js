const test = (a, b, ...c) => {
  console.log(a)
  console.log(b)
  console.log(c)
}

test(1, 2, 3, '4', true, {})
