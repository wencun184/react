import * as TYPE from "@/store/action-types";
export function sleep() {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, 2000);
  });
}
const voteAction = {
  async getTableList(list) {
    await sleep();
    return {
      type: TYPE.TACK_TABLELIST,
      list,
    };
  },
  delBtn(id) {
    return {
      type: TYPE.TACK_DELET,
      id,
    };
  },
  finBtn(id) {
    return {
      type: TYPE.TACK_FINISH,
      id,
    };
  },
};
export default voteAction;
