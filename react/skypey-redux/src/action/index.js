import { SET_ACTIVE_USER_ID, DELETE_CONTACT } from '../constants/action-types'

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
})

export const removeContact = id => ({
  type: DELETE_CONTACT,
  payload: id
})
