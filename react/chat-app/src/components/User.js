import React from "react";
import propTypes from "prop-types";

const User = ({ name }) => <li>{name}</li>

User.propTypes = {
  name: propTypes.string.isRequired,
}

export default User;
