export default function myCombineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  return function reducer(state = {}, action) {
    let nexState = {};
    reducerKeys.forEach((key) => {
      const reducer = reducers[key];
      nexState[key] = reducer(state[key], action);
    });
    return nexState;
  };
}
