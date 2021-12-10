import React, {Component} from 'react'

const ENDPOINT = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=hello&format=json&origin=*'

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
        this.setState({data: result.flat().filter(item => item)})
      })
  }

  render() {
    const result = this.state.data.map((item, index) => {
      return <li key={index} className={`list-group-item ${index === 0 ? 'active' : ''}`}>{index === 0 ? `Search term: ${item}` : item}</li>
    })

    return (
      <div className="mt-3">
        <ul className="list-group">{result}</ul>
      </div>
    )
  }
}

export default RandomSearch
