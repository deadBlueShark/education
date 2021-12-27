import React from 'react'

import withAuthorization from '../Session/withAuthorization'

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default withAuthorization(authUser => !!authUser)(HomePage)
