function test() {
  var sum = 0;
  for (var i = 0; i < 10; i++) {
    sum += i;
  }

  if (sum < 100) {
    var a = 10;
  } else {
    var b = 100;
  }
  console.log('i = ', i);
  console.log('a = ', a);
  console.log('b = ', b);
}

test();
