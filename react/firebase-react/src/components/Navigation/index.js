import React from 'react'
import {Link} from 'react-router-dom'
import SignOut from '../SignOut'
import {withAuth} from '../Session/context'
import AuthContext from '../Session/context';
import * as ROUTES from '../../constants/routes'

const Navigation = () => (
  <div>
    <AuthContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
      }
    </AuthContext.Consumer>
  </div>
);


const NavigationAuth = ({authUser}) => {
  return (
    <div>
      <label>{authUser.email}</label>
      <ul>
        <li><Link to={ROUTES.LANDING}>Landing</Link></li>
        <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.ACCOUNT}>Account</Link></li>
        <li><SignOut /></li>
      </ul>
    </div>
  )
}

const NavigationNonAuth = () => {
  return (
    <div>
      <ul>
        <li><Link to={ROUTES.SIGN_IN}>Signin</Link></li>
        <li><Link to={ROUTES.SIGN_UP}>Sign Up</Link></li>
        <li><Link to={ROUTES.LANDING}>Landing</Link></li>
      </ul>
    </div>
  )
}

export default Navigation
