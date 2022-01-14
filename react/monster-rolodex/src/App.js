import React from "react";
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 1,
          name: "Frankenstein"
        },
        {
          id: 2,
          name: "Dracula"
        },
        {
          id: 3,
          name: "Zoombie"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster =>
            <li key={monster.id}>{monster.name}</li>)
        }
      </div>
    );
  }
}
export default App;
