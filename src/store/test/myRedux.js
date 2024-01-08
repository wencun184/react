import { isPlainObject } from "@/util/util";

export function createStore(reducer) {
  let state; //存放公共状态
  let threadpool = []; //事件池
  // 获取公共状态
  function getState() {
    return state;
  }
  // 向事件池中加入组件更新的方法
  function subscribe(listener) {
    if (typeof listener !== "function")
      throw new TypeError("listener must function");
    if (!threadpool.includes(listener)) {
      threadpool.push(listener);
    }
    return function unsubscribe() {
      const index = threadpool.indexOf(listener);
      threadpool.splice(index, 1);
    };
  }
  // 派发任务通知reducer执行
  function dispatch(action) {
    if (!isPlainObject(action)) throw new TypeError("action no isPlainObject");
    if (typeof action.type == "undefined")
      throw new TypeError("no have undefined type");
    state = reducer(state, action);
    threadpool.forEach((listener) => {
      listener();
    });
    return action;
  }
  dispatch({
    type: Symbol(),
  });
  return {
    getState,
    subscribe,
    dispatch,
  };
}
