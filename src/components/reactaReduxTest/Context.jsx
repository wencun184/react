import { connect } from "react-redux";
const Context = function Context(props) {
  let { supNum, oppNum } = props;
  return (
    <>
      <div>支持人数:{supNum}</div>
      <div>反对人数:{oppNum}</div>
    </>
  );
};
export default connect((state) => state.vote)(Context);
