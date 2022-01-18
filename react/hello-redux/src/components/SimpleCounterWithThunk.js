import React from "react"
import simpleCounterStore from "../stores/ReduxThunkCounterStore"

const SimpleCounterWithThunk = () => {

  return (
    <div>
      Counter: {simpleCounterStore.getState()}
      <button onClick={handleDecreaseAction}>Decrease</button>
    </div>
  )
}

const incrementActionCreator = () => ({
  type: "DEC"
})

const incrementAsyncActionCreator = () => dispatch => setTimeout(() => {
  // You can invoke sync or async actions with `dispatch`
  dispatch(incrementActionCreator())
}, 1000);

// Dispatch async action
const handleDecreaseAction = () => {
  simpleCounterStore.dispatch(incrementAsyncActionCreator())
}

export default SimpleCounterWithThunk;
