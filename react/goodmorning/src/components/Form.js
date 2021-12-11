import React, {useState} from 'react'

/*
class Form extends Component {
  initalState = {name: '', job: ''}
  state = this.initalState

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({[name]: value})
  }

  handleSubmit = () => {
    if (!this.state.name || !this.state.job) return

    this.props.addCharacter(this.state)
    this.setState(this.initalState)
  }

  render() {
    const {name, job} = this.state

    return (
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name"
            value={name} onChange={this.handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="job" className="form-label">Job:</label>
          <input type="text" className="form-control" id="job" name="job"
            value={job} onChange={this.handleChange} />
        </div>
        <button type="button" className="btn btn-primary"
          onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}
*/

// Use functional component and hook
function Form(props) {
  const inital = {name: '', job: ''}
  const [character, setCharacter] = useState(inital)

  const handleChange = (event) => {
    const {name, value} = event.target

    setCharacter(Object.assign({}, character, {[name]: value}))
  }

  const handleSubmit = () => {
    props.addCharacter(character)
    setCharacter(inital)
  }

  return (
    <form>
      <div className="mb-3 mt-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" className="form-control" id="name" name="name"
          value={character.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="job" className="form-label">Job:</label>
        <input type="text" className="form-control" id="job" name="job"
          value={character.job} onChange={handleChange} />
      </div>
      <button type="button" className="btn btn-primary"
        onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Form
