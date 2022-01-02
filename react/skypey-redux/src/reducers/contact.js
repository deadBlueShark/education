import { contacts } from '../static-data'
import { DELETE_CONTACT } from '../constants/action-types'
import _ from 'lodash'

export default (state = contacts, action) => {
  switch(action.type) {
    case DELETE_CONTACT:
      return _.pickBy(state, (user, _) => user.user_id !== action.payload)
    default:
      return state
  }
}
