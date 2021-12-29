import { createStore } from 'redux'

import { techReducer } from '../reducers'

const INITIAL_STATE = {tech: "React"}

const techStore = createStore(techReducer, INITIAL_STATE)


export default techStore


/*
The role of the reducer is to help us access the store

We must remember that the reducer always returns a new state of the app

Redux is a predictable state container for JavaScript apps.
The createStore factory function from Redux is used to create a Redux STORE.
The Reducer is the only mandatory argument passed into createStore().
A REDUCER is just a function. A function that takes in two parameters.
The first being the STATE of the app, and the other being an ACTION.
A Reducer always returns the NEW STATE of your application.
The INITIAL STATE of your application, initialState is the second argument passed into the createStore function call.
Store.getState() will return the current state of your application, where store is a valid Redux STORE.


Redux source code:

function createStore(reducer) {
  ...
  return { dispatch, subscribe, getState }
}
*/
