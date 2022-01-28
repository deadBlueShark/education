import React from "react";
import propTypes from "prop-types";

import Message from "./Message";

const MessageList = ({ messages }) => {
  const messageList = messages.map(message => (
    <Message key={message.id} {...message} />
  ));

  return (
    <section id="messages-list">
      <ul>
        { messageList }
      </ul>
    </section>
  )
}

MessageList.propTypes = {
  messages: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      message: propTypes.string.isRequired,
      author: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MessageList;
