interface Monument {
  name: string;
  height: number;
}

const monuments: Monument[] = [];

monuments.push({ name: "Statue of Liberty", height: 46 });
monuments.push({ name: "Peter the Great", height: 96 });
monuments.push({ name: "Angel of the North", height: 20 });
console.log("Original:");
monuments.forEach(item => console.log(item));

function compareHeight(a: Monument, b: Monument): number {
  if (a.height > b.height) return 1;
  else if (a.height < b.height) return -1;
  else return 0;
}
let advancedConpareHeight = (a: Monument, b: Monument): number => b.height - a.height;

// the array.sort method expect a comparer that accepts two elements in array
monuments.sort(compareHeight);
console.log("ASC sorted:");
monuments.forEach(item => console.log(item));

monuments.sort(advancedConpareHeight);
console.log("DESC sorted:");
monuments.forEach(item => console.log(item));
