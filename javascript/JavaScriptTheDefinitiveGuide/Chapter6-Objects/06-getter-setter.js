var serialnum = {
  $num: 0,
  get next() {
    return this.$num;
  },
  set next(num) {
    return this.$num = num;
  }
}

console.log(serialnum.next);
console.log(serialnum.next = 10);
console.log(serialnum.next);
