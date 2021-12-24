import React from 'react'
import {withFirebase} from '../Firebase'
import AuthContext from './context'

const withAuth = Component => {
  class UserAuth extends React.Component {
    constructor(props) {
      super(props)
      this.state = {authUser: null}
    }

    componentDidMount() {
      this.unsubscribe = this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser ? this.setState({authUser}) : this.setState({authUser: null})
      })
    }

    // We also want to avoid memory leaks that lead to performance issues,
    // so we’ll remove the listener if the component unmounts.
    componentWillUnmount() {
      this.unsubscribe()
    }

    render() {
      return (
        <AuthContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthContext.Provider>
      )
    }
  }

  return withFirebase(UserAuth)
}

export default withAuth
