import React from 'react'

import store from '../../store'
import { editMessage, deleteMessage } from '../../action'

const Chats = ({ messages }) => {
  const listChatMsg = messages.map(message =>
    <Chat key={message.number} message={message} />)

  const chatWindowRef = React.useRef()

  React.useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight
  })

  return (
    <div className="Chats" ref={chatWindowRef}>
      {listChatMsg}
    </div>
  )
}

const Chat = ({ message }) => {
  const { text, is_user_msg, number } = message

  return is_user_msg ? (
    <div className="Chat is-user-msg"
      onDoubleClick={handleEditChat.bind(null, number, text)}>
      <span className="Chat__close"
        onClick={handleDeleteChat.bind(null, number)}>
        X
      </span>
      {text}
    </div>
  ) : (
    <span className="Chat">{text}</span>
  )
}

const handleEditChat = (number, text) => {
  const { activeUserId } = store.getState()
  store.dispatch(editMessage(activeUserId, number, text))
}

const handleDeleteChat = number => {
  const { activeUserId } = store.getState()
  store.dispatch(deleteMessage(activeUserId, number))
}

export default Chats
