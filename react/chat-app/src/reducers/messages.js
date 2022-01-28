import * as types from "../constants/ActionTypes";

const messages = (state = [], action) => {
  switch(action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      const { id, message, author } = action;
      return [...state, { id, message, author }];
    default:
      return state;
  }
}

export default messages;
