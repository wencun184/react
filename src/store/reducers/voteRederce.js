let inital = {
  supNum: 10,
  oppNum: 5,
};
// state存储store容器中的公共状态
// action每次基于dispatch派发的时候，传进来的行为对象
const voteRederce = function voteRederce(state = inital, action) {
  state = { ...state };
  switch (action.type) {
    case "VOTE_SUP":
      state.supNum++;
      break;
    case "VOTE_OPP":
      state.oppNum++;
      break;
    default:
      break;
  }
  // 整体替换store状态信息
  return state;
};
export default voteRederce;
