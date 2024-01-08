import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Context from "./Context";
import Option from "./Option";
const ContextCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleCss = styled.h2`
  padding: 10px 0;
`;

const Vote = function Vote(props) {
  const { supNum, oppNum } = props;

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
export default connect((store) => store.vote)(Vote);
