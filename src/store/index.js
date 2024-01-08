import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import reduxPromise from "redux-promise";
// import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
// 创建store公共容器
const store = createStore(reducer, applyMiddleware(reduxLogger, reduxPromise));
export default store;
