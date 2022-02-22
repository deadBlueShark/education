import { combineReducers } from "redux";

import Products from "../../data/seed";
import * as ACTION from "../actions";

const products = (state = Products, action) => {
  switch(action.type) {
    case ACTION.UPVOTE:
      return state + 1;
    case ACTION.DOWNVOTE:
      return state - 1;
    default:
      return state;
  }
}

const productReducers = combineReducers({products});
export default productReducers;
