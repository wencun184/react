import { combineReducers } from "redux";
// import myCombineReducers from "../test/myCombineReducers";
import voteRederce from "./voteRederce";
import taskRederce from "./taskRederce";
const reducer = combineReducers({
  vote: voteRederce,
  task: taskRederce,
});
export default reducer;
