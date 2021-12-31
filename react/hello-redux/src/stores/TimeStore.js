import { createStore } from 'redux'

import { counterReducer } from '../reducers'

const INITIAL_STATE = {
  days: 11,
  hours: 31,
  minutes: 27,
  seconds: 11,
  activeSession: "DAYS"
}

const timeStore = createStore(counterReducer, INITIAL_STATE)

export default timeStore
