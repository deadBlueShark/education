import React from 'react'
import {Link} from 'react-router-dom'
import SignOut from '../SignOut'

import * as ROUTES from '../../constants/routes'

const Navigation = () => {
  return (
    <div>
      <ul>
        <li><Link to={ROUTES.SIGN_IN}>Signin</Link></li>
        <li><Link to={ROUTES.SIGN_UP}>Sign Up</Link></li>
        <li><Link to={ROUTES.LANDING}>Landing</Link></li>
        <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.ACCOUNT}>Account</Link></li>
        <li><Link to={ROUTES.ADMIN}>Admin</Link></li>
        <li><SignOut /></li>
      </ul>
    </div>
  )
}

export default Navigation
