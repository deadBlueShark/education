import * as ACTION from './actions'

export default function counter(state = 0, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return state + 1
    case ACTION.INCREMENT_2:
      return state + 2
    case ACTION.DECREMENT:
      return state - 1
    default:
      return state
  }
}
