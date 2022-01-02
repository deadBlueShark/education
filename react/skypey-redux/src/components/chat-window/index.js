import React from 'react'
import _ from 'lodash'

import store from '../../store'
import ChatHeader from '../chat-header'
import Chats from '../chats'

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState()
  const activeUser = state.contacts[activeUserId]
  const activeMsgs = state.messages[activeUserId]

  return (
    <div className="ChatWindow">
      <ChatHeader activeUser={activeUser} />
      <Chats messages={_.values(activeMsgs)}/>
    </div>
  )
}

export default ChatWindow
