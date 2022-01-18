import React from 'react'

import HelloWorld from './components/HelloWorld'
import UserCard from './components/UserCard'
import BankApp from './components/BankApp'
import TimeCounter from './components/TimeCounter'
import SimpleCounterWithThunk from './components/SimpleCounterWithThunk'

// import techStore from './stores/TechReduxStore'

function App() {
  return (
    <>
      <div className="App">
        {/*<HelloWorld tech={techStore.getState().tech} />*/}
        <HelloWorld />
      </div>
      <UserCard />
      <BankApp />
      <TimeCounter />
      <SimpleCounterWithThunk />
    </>
  );
}

export default App;
