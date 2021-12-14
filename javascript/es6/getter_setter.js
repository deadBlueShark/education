class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get getWidth() {
    return this.width;
  }

  set setWidth(width) {
    this.width = width;
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.height);
console.log(rect.width);
rect.height = 30;
rect.width = 40;
console.log(rect.height);
console.log(rect.width);

rect.setWidth = 100;
console.log(rect.width);

