import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import techStore from './stores/TechReduxStore'

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

render()

techStore.subscribe(render)
