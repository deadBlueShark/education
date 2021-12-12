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


