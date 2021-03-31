1. Use object destructuring

The object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables.
Object destructuring can extract multiple properties in one statement, can access properties from nested objects, and can set a default value if the property doesn’t exist.

https://dmitripavlutin.com/javascript-object-destructuring/

2. Use array destructuring

```javascript

const sumArray = (arr) {
  const [a, b, c, d] = arr;
  ....
}

// More
const sumArray = ([a, b, c, d]) {
  ....
}
sumArray([1, 3, 4, 3]);

```

