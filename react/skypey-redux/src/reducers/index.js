import { combineReducers } from 'redux'

import contacts from './contact'
import user from './user'
import activeUserId from './active-user-id'
import messages from './messages'

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages
})
