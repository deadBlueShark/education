import { combineReducers } from "redux";

import messages from "./messages";
import users from "./users";

const chatReducer = combineReducers({
  messages,
  users,
});

export default chatReducer;

