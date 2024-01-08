import { combineReducers } from "redux";
// import myCombineReducers from "../test/myCombineReducers";
import voteRederce from "./voteRederce";
import voteRederce2 from "./vote2Rederce";
const reducer = combineReducers({
  vote: voteRederce,
  vote2: voteRederce2,
});
export default reducer;
