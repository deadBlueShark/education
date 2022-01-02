import { EDIT_MESSAGE, RESET_EDIT_MESSAGE } from '../constants/action-types'

const activeMessageId = (state = null, action) => {
  switch(action.type) {
    case EDIT_MESSAGE:
      return action.payload.number
    case RESET_EDIT_MESSAGE:
      return null
    default:
      return state
  }
}

export default activeMessageId
