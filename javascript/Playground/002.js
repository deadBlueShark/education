function isEqual (a, b) {
  let len
  if ((len = a.length) != b.length) return false
  for (let i = 0; i < len; i++) {
    if (a[i] != b[i]) return false
  }
  return true
}

console.log(isEqual([], []));                   // true
console.log(isEqual([1, 3, 5], [1, 3, 5]));     // true
console.log(isEqual([4, 32], []))               // false
console.log(isEqual([9, 3, 2], [3, 2, 3]))      // false
