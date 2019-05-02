function calAve(numbers: number[]): number {
  let count = numbers.length;
  if (!count) return 0;

  let sum = numbers.reduce((sumUntil, element) => sumUntil + element);
  return sum / count;
}

console.log(calAve([]));

