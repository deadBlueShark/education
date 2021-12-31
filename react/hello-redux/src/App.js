import React from 'react'

import HelloWorld from './components/HelloWorld'
import UserCard from './components/UserCard'
import BankApp from './components/BankApp'
import TimeCounter from './components/TimeCounter'

import techStore from './stores/TechReduxStore'

function App() {
  return (
    <>
      <div className="App">
        <HelloWorld tech={techStore.getState().tech} />
      </div>
      <UserCard />
      <BankApp />
      <TimeCounter />
    </>
  );
}

export default App;
