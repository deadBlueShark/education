### Some notes about React

- Parent components communicate data to children through props

- Component can’t modify its props, props is immutable

- Truyền data vào component: dùng props
  State chỉ sử dụng bên trong component, bên ngoài ko access đc
  State truyền vào child compoments, thành props của child components

- Class-based compopent
- Functional component: nhẹ hơn

- When we pull in API data, we want to use componentDidMount, because we want
to make sure the component has rendered to the DOM before we bring in the data.

- The steps for building React apps from scratch:

1. Break the app into components
2. Build a static version of the app
3. Determine what should be stateful
4. Determine in which component each piece of state should live
5. Hard-code initial states
6. Add inverse data flow
7. Add server communication


