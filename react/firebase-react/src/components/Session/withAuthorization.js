import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
  class AppAuthorization extends React.Component {
    componentDidMount() {
      this.unsubscribe = this.props.firebase.auth
        .onAuthStateChanged(authUser => {
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.SIGN_IN)
          }
        })
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    render() {
      return (
        <Component {...this.props} />
      )
    }
  }

  return compose(withRouter, withFirebase)(AppAuthorization)
}

export default withAuthorization
