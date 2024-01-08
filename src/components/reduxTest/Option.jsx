import { useContext } from "react";
import ThemeContext from "@/ThemeContext";
import styled from "styled-components";

const Button = styled.button`
  margin-right: 10px;
`;
const Option = function Option(props) {
  const { store } = useContext(ThemeContext);
  return (
    <div>
      <Button
        onClick={() => {
          store.dispatch({ type: "VOTE_SUP" });
        }}
      >
        支持
      </Button>
      <button
        onClick={() => {
          store.dispatch({ type: "VOTE_OPP" });
        }}
      >
        反对
      </button>
    </div>
  );
};
export default Option;
