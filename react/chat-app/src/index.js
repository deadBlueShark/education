import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import chatReducer from "./reducers";
import setupSocket from "./sockets";

import handleNewMessage from "./sagas";

// Generate random username
import username from "./utils/name";

const sagaMiddleware = createSagaMiddleware();
const chatStore = createStore(chatReducer, applyMiddleware(sagaMiddleware));

const socket = setupSocket(chatStore.dispatch, username);

sagaMiddleware.run(handleNewMessage, {socket, username});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={chatStore}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
