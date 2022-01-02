import _ from 'lodash'

import { getMessages } from '../static-data'
import { SEND_MESSAGE } from '../constants/action-types'

const messages = (state = getMessages(10), action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      const msgOfUser = _.cloneDeep(state[action.payload.user_id])
      const nextOrder = Object.keys(msgOfUser).length
      msgOfUser[nextOrder] = {number: nextOrder, text: action.payload.message, is_user_msg: true}

      return {...state, [action.payload.user_id]: msgOfUser}
    default:
      return state
  }
}

export default messages
