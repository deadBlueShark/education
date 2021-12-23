import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import { FirebaseContext } from '../Firebase'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
import {compose} from 'recompose'

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
{/*    <FirebaseContext.Consumer>
      {firebase =>  firebase={firebase} />}
    </FirebaseContext.Consumer>
*/}
    <SignUpForm />
    <SignInLink />
  </div>
)

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props)

    this.state = {...INITIAL_STATE}
  }

  onSubmit = event => {
    event.preventDefault()
    const {email, passwordOne} = this.state

    // this props from higher-order component withFirebase
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log(authUser)
        this.setState({...INITIAL_STATE})
        // this props from higher-order component withRouter
        this.props.history.push(ROUTES.HOME)
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
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''


    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit" disabled={isInvalid}>Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase)

// const SignUpForm = withRouter(withFirebase(SignUpFormBase))

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)

const SignInLink = () => (
  <p>
    Already have account? <Link to={ROUTES.SIGN_IN}>Signin</Link>
  </p>
)

export default SignUpPage

export { SignUpForm, SignUpLink};
