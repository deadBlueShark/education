import { SET_TYPING_VALUE } from '../constants/action-types'

const typing = (state = "", action) => {
  switch(action.type) {
    case SET_TYPING_VALUE:
      return action.payload
    default:
      return state
  }
}

export default typing
