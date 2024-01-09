import * as TYPE from "@/store/action-types";
let inital = {
  tableList: [],
  id: 0,
};
// state存储store容器中的公共状态
// action每次基于dispatch派发的时候，传进来的行为对象
const voteRederce = function voteRederce(state = inital, action) {
  state = { ...state };
  switch (action.type) {
    case TYPE.TACK_TABLELIST:
      state.tableList = action.list;
      break;
    case TYPE.TACK_DELET:
      state.tableList = state.tableList.filter((v) => {
        return v.id !== action.id;
      });
      break;
    case TYPE.TACK_FINISH:
      state.tableList = state.tableList.map((v) => {
        if (v.id !== action.id) {
          v.status = true;
        }
        return v;
      });
      break;
    default:
      break;
  }
  // 整体替换store状态信息
  return state;
};
export default voteRederce;
