import React, {Component} from 'react'

const ENDPOINT = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Flash Loan&format=json&origin=*'

class RandomSearch extends Component {
  state = {
    data: []
  }

  // When we pull in API data, we want to use componentDidMount, because we want
  // to make sure the component has rendered to the DOM before we bring in the data.
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    fetch(ENDPOINT).then(res => res.json())
      .then(result => {
        this.setState({data: result})
      })
  }

  render() {
    const result = this.state.data.map((item, index) => {
      return <li key={index}>{item}</li>
    })

    return <ul>{result}</ul>
  }
}

export default RandomSearch
