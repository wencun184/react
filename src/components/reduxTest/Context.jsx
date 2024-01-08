import { useContext } from "react";
import ThemeContext from "@/ThemeContext";
const Context = function Context(props) {
  const { store } = useContext(ThemeContext);
  let { supNum, oppNum } = store.getState();
  return (
    <>
      <div>支持人数:{supNum}</div>
      <div>反对人数:{oppNum}</div>
    </>
  );
};
export default Context;
