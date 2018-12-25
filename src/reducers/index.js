import { counter, notify } from "./reducers";
import { combineReducers } from "redux";

export default combineReducers({
  counter,
  notify
});
