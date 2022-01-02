import React from 'react'

import ChatWindow from '../chat-window'
import Empty from '../empty'

const Main = ({ user, activeUserId }) => {

  return (
    <main className="Main">
      { activeUserId ? <ChatWindow activeUserId={activeUserId} /> : <Empty user={user} /> }
    </main>
  )
}

export default Main
