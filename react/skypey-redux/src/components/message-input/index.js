import React from 'react'
import store from '../../store'
import { setTypingValue, sendMessage } from '../../action'

const MessageInput = ({ value }) => {
  return (
    <form className="Message" onSubmit={handleSubmit} >
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="Typing a message"
      />
    </form>
  )
}

const handleChange = (event) => {
  store.dispatch(setTypingValue(event.target.value))
}

const handleSubmit = (event) => {
  event.preventDefault()
  const { typing, activeUserId } = store.getState()

  store.dispatch(sendMessage(activeUserId, typing))
  store.dispatch(setTypingValue(""))
}

export default MessageInput
