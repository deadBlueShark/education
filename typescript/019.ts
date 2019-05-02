interface Loveable {
  kiss: (time: number) => string;
}

class Person implements Loveable {
  kiss(time: number): string {
    return 'A kiss';
  }
}

console.log(new Person().kiss(1));
