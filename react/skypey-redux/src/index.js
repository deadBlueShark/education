import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'

const render = () => {
  fancyLog()

  ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,
    document.getElementById('root'))
}

render()

store.subscribe(render)

function fancyLog() {
  console.log("%c Rendered with 👉 👉 👇", "background: purple; color: #FFF");
  console.log(store.getState());
}
