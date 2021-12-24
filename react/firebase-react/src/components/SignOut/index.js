import React from 'react'
import {withRouter} from 'react-router-dom'
import {withFirebase} from '../Firebase'
import * as ROUTES from '../../constants/routes'
import {compose} from 'recompose'

class SignOutBase extends React.Component {
  constructor(props) {
    super(props)
  }

  signOut = () => {
    this.props.firebase.doSignOut()
      .then(res => {
        console.log(res)
        this.props.history.push(ROUTES.LANDING)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <button type="button" onClick={this.signOut}>Signout</button>
    )
  }
}

const SignOut = compose(withRouter, withFirebase)(SignOutBase)

export default SignOut
