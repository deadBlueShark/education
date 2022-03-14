import React, {Component} from 'react'
import Table from './components/Table'
import Form from './components/Form'
import RandomSearch from './components/RandomSearch'

class App extends Component {
  state = {
    characters: [
      {name: "David", job: "Lawyer"},
      {name: "John", job: "Player"},
      {name: "Harvey", job: "Gamer"},
      {name: "None", job: "Streamer"},
    ]
  }

  removeCharacter = (index) => {
    const characters = this.state.characters.filter((_, currentIndex) => currentIndex !== index)
    // characters.splice(index, 1) Do not change state in-place

    this.setState({characters})
  }

  addCharacter = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    return (
      <div className="App">
        <Table characters={this.state.characters}
          removeCharacter={this.removeCharacter}/>
        <Form addCharacter={this.addCharacter} />
        <RandomSearch />
      </div>
    )
  }
}

export default App;
