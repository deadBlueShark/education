import { createStore } from 'redux'

import { userReducer } from '../reducers'

const INITIAL_STATE = {
  name: "Alex Bakery",
  description: "Software Engineer, Speaker, and Occasional Model",
  likes: "Cats, Wine, and Black dresses",
  location: "localhost"
}

const userStore = createStore(userReducer, INITIAL_STATE)

export default userStore
