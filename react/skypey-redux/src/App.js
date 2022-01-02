import React from 'react'
import _ from 'lodash'

import Main from './components/main'
import Sidebar from './components/sidebar'
import store from './store'

function App() {
  const { contacts, user, activeUserId } = store.getState()

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
