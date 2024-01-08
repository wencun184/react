import { connect } from "react-redux";
import styled from "styled-components";
import action from "@/store/actions";

const Button = styled.button`
  margin-right: 10px;
`;
const Option = function Option(props) {
  let { addbtn, oppbtn } = props;
  return (
    <div>
      <Button onClick={addbtn}>支持</Button>
      <button onClick={oppbtn}>反对</button>
    </div>
  );
};
export default connect(null, action.vote)(Option);
