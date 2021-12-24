import React from 'react'
import {withFirebase} from '../Firebase'
import * as ROUTES from '../../constants/routes'

const PasswordForgetPage = () => {
  return (
    <div>
      <h1>Reset pass</h1>
      <PasswordForgetForm />
    </div>
  )
}

const INITIAL_STATE = {email: '', error: null}

class PasswordForgetFormBase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...INITIAL_STATE}
  }

  onSubmit = event => {
    event.preventDefault()

    this.props.firebase.doPasswordReset(this.state.email)
      .then(res => {
        this.setState({...INITIAL_STATE})
        console.log("reset pass", res)
        console.log("check email")
      })
      .catch(err => {
        console.log(err)
        this.setState({err})
      })
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {email, error} = this.state
    const isInvalid = email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <button type="submit" disabled={isInvalid}>Submit</button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export default PasswordForgetPage
