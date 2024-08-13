const Person = (props) => {
  return (
    <div>
      <p>I'm {props.name}, {props.age} years old.</p>
      <i>{props.children}</i>
    </div>
  )
}

// Old styles:
//import { Component } from 'react';
// class Person extends Component {
//   render() {
//     return (<p>I'm {this.props.name}. {this.props.age} years sold.</p>)
//   }
// }

export default Person;
