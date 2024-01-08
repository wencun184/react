import * as TYPE from "@/store/action-types";
export function sleep() {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, 2000);
  });
}
const voteAction = {
  async addbtn() {
    await sleep();
    return {
      type: TYPE.VOTE_SUP,
    };
  },
  oppbtn() {
    return {
      type: TYPE.VOTE_OPP,
    };
  },
};
export default voteAction;
