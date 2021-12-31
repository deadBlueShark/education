import React from 'react'
import _ from 'lodash'

import Main from './components/main'
import Sidebar from './components/sidebar'
import store from './store'

function App() {
  const { contacts } = store.getState()

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
