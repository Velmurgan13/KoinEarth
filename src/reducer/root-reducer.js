import { combineReducers } from "redux";
import { github } from "./github";

// eslint-disable-next-line
export default () =>
  combineReducers({
    github,
  });
