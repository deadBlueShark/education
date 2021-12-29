import React from 'react'

import HelloWorld from './HelloWorld'
import techStore from './stores/TechReduxStore'

import UserCard from './UserCard'

function App() {
  return (
    <>
      <div className="App">
        <HelloWorld tech={techStore.getState().tech} />
      </div>
      <UserCard />
    </>
  );
}

export default App;
