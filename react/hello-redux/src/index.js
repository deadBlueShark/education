import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import techStore from './stores/TechReduxStore'
import bankStore from './stores/BankStore'
import timeStore from './stores/TimeStore'
import simpleCounterStore from "./stores/ReduxThunkCounterStore"


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
bankStore.subscribe(render)
timeStore.subscribe(render)
simpleCounterStore.subscribe(render)
