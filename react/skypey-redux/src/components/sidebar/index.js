import React from 'react'

import User from '../user'

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => <User key={contact.user_id} user={contact} />)}
    </aside>
  )
}

export default Sidebar
