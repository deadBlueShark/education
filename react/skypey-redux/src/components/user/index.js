import React from 'react'

import store from '../../store'
import { setActiveUserId, removeContact } from '../../action'

const User = ({ user }) => {
  const { name, profile_pic, status } = user

  return (
    <div className="User" onClick={() => handleUserClick(user)}>
      <img src={'images/' + profile_pic} alt={name} className="User__pic"
        onClick={(event) => handleRemoveContact(user, event)} />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  )
}

const handleUserClick = ({ user_id }) => {
  store.dispatch(setActiveUserId(user_id))
}

const handleRemoveContact = ({ user_id }, event) => {
  event.stopPropagation()

  store.dispatch(setActiveUserId(null))
  store.dispatch(removeContact(user_id))
}

export default User
