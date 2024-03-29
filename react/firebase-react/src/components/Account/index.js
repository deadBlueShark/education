import React from 'react'
import {Link} from 'react-router-dom'
import withAuthorization from '../Session/withAuthorization'

import * as ROUTES from '../../constants/routes'

const AccountPage = () => {
  return (
    <div>
      <h1>Account</h1>
      <Link to={ROUTES.PASSWORD_CHANGE}>Update pass</Link>
    </div>
  )
}

export default withAuthorization(authUser => !!authUser)(AccountPage)
