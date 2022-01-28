import React from "react";
import propTypes from "prop-types";

const Message = ({ message, author }) => (
  <p><i>{ author }</i>: { message }</p>
)

Message.propTypes = {
  message: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
}

export default Message;
