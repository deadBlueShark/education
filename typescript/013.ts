function reverse<T> (list: T[]): T[] {
  let reverseList: T[] = [];

  for(let i = (list.length - 1); i >= 0; i--) {
    reverseList.push(list[i]);
  }
  return reverseList;
}

console.log(reverse<string>(['a', 'b', 'c']));
console.log(reverse<number>([1, 2, 3]));
