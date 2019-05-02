interface Movable<E, F> {
  run(a: E, b: F): F;
}

class Person implements Movable<number, string> {
  run(a: number, b: string): string {
    return `Move to ${b} ${a}km`;
  }
}

console.log(new Person().run(5, 'the North'));
