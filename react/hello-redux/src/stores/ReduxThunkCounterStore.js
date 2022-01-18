import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { simpleCounterNumberReducer } from "../reducers"

const simpleCounterStore = createStore(simpleCounterNumberReducer, applyMiddleware(thunk))

export default simpleCounterStore
