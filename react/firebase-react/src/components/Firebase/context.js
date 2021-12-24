import React from 'react'

const FirebaseContext = React.createContext(null)

// Higher-Order Components
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase}></Component>}
  </FirebaseContext.Consumer>
)

export default FirebaseContext

// The Firebase Context, located in the Firebase module (folder), is used to
// provide a Firebase instance to the entire application in the src/index.js file
