namespace GetSet {
  interface Student {
    name: string;
    age?: number;
  }

  class Group {
    private _member: Student;

    constructor(private name: string, private quantity: number) {}

    get member() {
      return this._member;
    }

    set member(member: Student) {
      this._member = member;
    }

    groupName(): string {
      return this.name;
    }
  }

  let a: Student = { name: 'Nguyen' };

  let group = new Group('Avenger', 5);
  group.member = a;

  console.log(group.member.name); // Nguyen
  console.log(group.groupName()); // Avenger
}
