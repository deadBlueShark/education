import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Navigation from '../Navigation'
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import {withFirebase} from '../Firebase'

import * as ROUTES from '../../constants/routes';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      authUser: null
    }
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
      <BrowserRouter>
        <div>
          <Navigation authUser={this.state.authUser} />

          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage}/>
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage}/>
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
          <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
          <Route exact path={ROUTES.HOME} component={HomePage}/>
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage}/>
          <Route exact path={ROUTES.ADMIN} component={AdminPage}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default withFirebase(App);
