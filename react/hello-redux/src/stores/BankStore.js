import { createStore } from 'redux'

import { bankReducer } from '../reducers'

const INITIAL_STATE = {
  username: "Janny",
  totalAmount: 2500701
}

const bankStore = createStore(bankReducer, INITIAL_STATE)

export default bankStore
