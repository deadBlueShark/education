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
import withAuth from '../Session/withAuth'
import PasswordChangePage from '../PasswordChange'

import * as ROUTES from '../../constants/routes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />

          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage}/>
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage}/>
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
          <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
          <Route exact path={ROUTES.HOME} component={HomePage}/>
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage}/>
          <Route exact path={ROUTES.ADMIN} component={AdminPage}/>
          <Route exact path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default withAuth(App);
