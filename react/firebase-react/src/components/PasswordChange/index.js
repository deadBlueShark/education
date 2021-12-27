import React from 'react'
import {withFirebase} from '../Firebase'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const PasswordChangePage = () => {
  return (
    <div>
      <h1>Update pass</h1>
      <PasswordChangeForm />
    </div>
  )
}

const INITIAL_STATE = {password: '', passwordConfirm: '', error: null}

class PasswordChangeFormBase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...INITIAL_STATE}
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()

    this.props.firebase
      .doPasswordUpdate(this.state.password)
      .then(res => {
        console.log("Change pass", res)
        this.setState({...INITIAL_STATE})
        this.props.history.push(ROUTES.ACCOUNT)
      })
      .catch(error => this.setState({error}))
  }

  render() {
    const {password, passwordConfirm, error} = this.state
    const isInvalid = password === '' || passwordConfirm === '' || password !== passwordConfirm

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="New password"
        />
        <input
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm password"
        />
        <button type="submit" disabled={isInvalid}>Submit</button>

        {error && <p>{error.message}</p>}
      </form>

    )
  }
}

const PasswordChangeForm = withRouter(withFirebase(PasswordChangeFormBase))

export default PasswordChangePage
