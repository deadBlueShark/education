import React from 'react'
import _ from 'lodash'

import store from '../../store'
import ChatHeader from '../chat-header'
import Chats from '../chats'
import MessageInput from '../message-input'

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState()
  const activeUser = state.contacts[activeUserId]
  const activeMsgs = state.messages[activeUserId]
  const { typing } = state

  return (
    <div className="ChatWindow">
      <ChatHeader activeUser={activeUser} />
      <Chats messages={_.values(activeMsgs)}/>
      <MessageInput value={typing} />
    </div>
  )
}

export default ChatWindow
