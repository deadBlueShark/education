import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import * as ACTION from './src/actions'
import Counter from './src/Counter'
import reducer from './src/reducers'
// First we import our Saga from the ./sagas module
import rootSaga from './src/sagas'

// Then we create a middleware using the factory function createSagaMiddleware
// exported by the redux-saga library.
const sagaMiddleware = createSagaMiddleware()

// Before running our rootSaga, we must connect our middleware to the Store
// using applyMiddleware
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

// Then we can use the sagaMiddleware.run(rootSaga) to start our Saga
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action(ACTION.INCREMENT)}
      onDecrement={() => action(ACTION.DECREMENT)}
      onIncrementAsync={() => action(ACTION.INCREMENT_ASYNC)}
      onDecrementAsync={() => action(ACTION.DECREMENT_ASYNC)} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
