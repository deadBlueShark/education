import { combineReducers } from 'redux'

import contacts from './contact'
import user from './user'
import activeUserId from './active-user-id'
import messages from './messages'
import typing from './typing'
import activeMessageId from './active-message-id'

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing,
  activeMessageId
})
