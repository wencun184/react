import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Context from "./Context";
import Option from "./Option";
import ThemeContext from "@/ThemeContext";
const ContextCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleCss = styled.h2`
  padding: 10px 0;
`;

const Vote = function Vote(props) {
  const { store } = useContext(ThemeContext);
  let { supNum, oppNum } = store.getState();
  // 组件第一次渲染完毕后，把让组件更新的方法放在store事件池中
  //   let [num, setNum] = useState(0);
  //   const update = () => {
  //     setNum(num + 1);
  //   };
  //   useEffect(() => {
  //     //   subscribe让组件更新的方法，把返回的方法执行，可以把放入事件池中的方法移除掉
  //     const unsubscribe = store.subscribe(update);
  //     return () => {
  //       // 在上一次组件释放的时候，把上一次放在事件池中的方法移除掉! !
  //       unsubscribe();
  //     };
  //   }, [num]);
  let [, setNum] = useState(0);
  useEffect(() => {
    store.subscribe(() => setNum(+new Date()));
  }, []);
  return (
    <ContextCss>
      <div>
        <TitleCss>总人数：{supNum + oppNum}</TitleCss>
        <Context></Context>
        <Option></Option>
      </div>
    </ContextCss>
  );
};
export default Vote;
