import React from 'react'

import HelloWorld from './HelloWorld'
import techStore from './stores/TechReduxStore'

function App() {
  return (
    <div className="App">
      <HelloWorld tech={techStore.getState().tech} />
    </div>
  );
}

export default App;
