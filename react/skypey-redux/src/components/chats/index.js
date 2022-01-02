import React from 'react'

const Chats = ({ messages }) => {
  const listChatMsg = messages.map(message =>
    <Chat key={message.number} message={message} />)

  return (
    <div className="Chats">{listChatMsg}</div>
  )
}

const Chat = ({ message }) => {
  const { text, is_user_msg } = message

  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  )
}

export default Chats
