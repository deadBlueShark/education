// dictionary
interface Student {
  name: string;
  age: number;
}

interface ClassList {
  [index: string]: Student;
}

let class12A1: ClassList = {};

class12A1['le chi nguyen'] = { name: 'Nguyen', age: 25 };
class12A1['cao vien trinh'] = { name: 'Trinh', age: 25 };
class12A1[0] = { name: 'Thanh', age: 32 };
class12A1['noname'] = { name: null, age: null };

console.log(JSON.stringify(class12A1, null, 2));
console.log(class12A1['le chi nguyen']);
console.log(class12A1[0]);

delete class12A1[0]
console.log(class12A1);
