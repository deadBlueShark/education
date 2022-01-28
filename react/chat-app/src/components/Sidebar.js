import React from "react";
import propTypes from "prop-types";

import User from "./User";

const Sidebar = ({ users }) => {
  const userList = users.map(user => <User key={user.id} {...user} />);

  return (
    <aside id="sidebar" className="sidebar">
      <ul>
        { userList }
      </ul>
    </aside>
  )
}

Sidebar.propTypes = {
  users: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Sidebar;
