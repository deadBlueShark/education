import React from 'react'
import { PropTypes } from 'prop-types';

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync,
  onIncrease2Async,
}) =>
  <div>
    <button onClick={onIncrement}>
      Increment
    </button>
    <br />

    <button onClick={onDecrement}>
      Decrement
    </button>
    <br />

    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    <br />

    <button onClick={onDecrementAsync}>
      Decrement after 1 second
    </button>
    <br />

    <button onClick={onIncrease2Async}>
      Increment 2 after a second
    </button>
    <br />

    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onDecrementAsync: PropTypes.func.isRequired,
  onIncrease2Async: PropTypes.func.isRequired,
}

export default Counter
