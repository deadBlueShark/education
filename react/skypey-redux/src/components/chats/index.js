import React from 'react'

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
  const { text, is_user_msg } = message

  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  )
}

export default Chats
