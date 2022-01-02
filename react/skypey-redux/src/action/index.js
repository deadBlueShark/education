import {
  SET_ACTIVE_USER_ID,
  DELETE_CONTACT,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  RESET_EDIT_MESSAGE
} from '../constants/action-types'

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
})

export const removeContact = id => ({
  type: DELETE_CONTACT,
  payload: id
})

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
})

export const sendMessage = (user_id, message, activeMessageId) => ({
  type: SEND_MESSAGE,
  payload: { user_id, message, activeMessageId }
})

export const editMessage = (user_id, number, message) => ({
  type: EDIT_MESSAGE,
  payload: { user_id, message, number }
})

export const deleteMessage = (user_id, number) => ({
  type: DELETE_MESSAGE,
  payload: { user_id, number }
})

export const resetEditMessage = () => ({type: RESET_EDIT_MESSAGE})
