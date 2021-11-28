import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <Person name="Nguyen" age="28"></Person>
      <Person name="David" age="30">Hobbies: Learning</Person>
    </div>
  );
}

// Not use JSX
// function App() {
//   return (
//     React.createElement("div", {className: "App"},
//       React.createElement("div", null, "Hello ReactJS"))
//   )
// }

export default App;
