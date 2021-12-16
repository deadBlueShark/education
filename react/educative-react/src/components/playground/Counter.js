import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  const increaseHandler = () => {
    setCount(count + 1)
  }

  const decreaseHandler = () => {
    setCount(count - 1)
  }

/* ASYNCHRONOUS STATE IN REACT
  const increaseHandler = () => {
    setTimeout(() => setCount(state => state + 1), 1000)
  }

  const decreaseHandler = () => {
    setTimeout(() => setCount(state => state - 1), 1000)
  }
*/

  return (
    <div>
      <h3>Current counter: {count}</h3>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
    </div>
  )
}

export default Counter
