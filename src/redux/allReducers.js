import { combineReducers } from "redux";
import { counterReducer } from "./counterReducers";

const allReducers = combineReducers({
  counter: counterReducer,
});

export default allReducers;
