class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rect = new Rectangle('Red', 20, 10);
console.log('Color: ' + rect.getColor());
console.log('Area: ' + rect.getArea());
console.log('toString: ' + rect.toString());
