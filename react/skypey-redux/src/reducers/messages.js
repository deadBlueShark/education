import _ from 'lodash'

import { getMessages } from '../static-data'
import {
  SEND_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE
} from '../constants/action-types'

const messages = (state = getMessages(10), action) => {
  const { user_id, message, number, activeMessageId } = action.payload || {}
  let msgOfUser, nextOrder, newMsgOfUser, newMessage

  switch(action.type) {
    case SEND_MESSAGE:
      msgOfUser = _.cloneDeep(state[user_id])
      nextOrder = activeMessageId || (+_.keys(msgOfUser).pop() + 1)
      newMessage = activeMessageId ? `${message} (edited)` : message
      msgOfUser[nextOrder] = {number: nextOrder, text: newMessage, is_user_msg: true}

      return {...state, [user_id]: msgOfUser}
    case DELETE_MESSAGE:
      msgOfUser = _.cloneDeep(state[user_id])
      newMsgOfUser = _.pickBy(msgOfUser, (_, key) => key != number)

      return {...state, [user_id]: newMsgOfUser}
    default:
      return state
  }
}

export default messages
