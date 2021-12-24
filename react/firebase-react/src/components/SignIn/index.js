import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {withFirebase} from '../Firebase'
import * as ROUTES from '../../constants/routes'
import {compose} from 'recompose'
import {SignUpLink} from '../SignUp'


const SignInPage = () => {
  return (
    <div>
      <h1>Signin</h1>
      <SignInForm />
      <SignUpLink />
      <Link to={ROUTES.PASSWORD_FORGET}>Forget pass</Link>
    </div>
  )
}

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class SignInFormBase extends React.Component {
  constructor(props) {
    super(props)

    this.state = {...INITIAL_STATE}
  }

  onSubmit = event => {
    event.preventDefault()
    const {email, password} = this.state

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        this.setState({...INITIAL_STATE})
        this.props.history.push(ROUTES.HOME)
      })
      .catch(error => {
        console.log(error)
        this.setState({error})
      })
  }

  onChange = event => {
    const {name, value} = event.target

    this.setState({[name]: value})
  }

  render() {
    const {email, password, error} = this.state
    const isInvalid = !email || !password

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button type="submit" disabled={isInvalid}>Signin</button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase)

export default SignInPage
