// ES6内置API兼容处理
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";
// import { createElement, render } from "./jsxHandle";
import "@/index.less";
import PropsDome from "@/components/SlotTest";
import ClassComponent from "./components/ClassConponentTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="title">嘻嘻</div>
    <div>aa</div>
    <PropsDome>
      <div slot="header">页眉</div>
      <div>自定义</div>
      <div slot="footer">页脚</div>
    </PropsDome>
    <ClassComponent title="标题"></ClassComponent>
  </>
);
setTimeout(() => {
  root.render(
    <>
      <div className="title">嘻嘻</div>
      <div>aa</div>
      <PropsDome>
        <div slot="header">页眉</div>
        <div>自定义</div>
        <div slot="footer">页脚</div>
      </PropsDome>
      <ClassComponent title="nini"></ClassComponent>
    </>
  );
}, 5000);

fetch("/jian/subscriptions/recommended_collections")
  .then((resolve) => resolve.json())
  .then((res) => {
    console.log(res);
  });
fetch("/zhi/news/latest")
  .then((resolve) => resolve.json())
  .then((res) => {
    console.log(res);
  });

// const x = 10;
// const y = "20";
// const vdom = createElement(
//   "div",
//   null,
//   createElement("h2", { className: "title" }, 10),
//   createElement(
//     "div",
//     { style: { fontSize: "18px" } },
//     createElement("span", null, x),
//     createElement("span", null, y)
//   )
// );
// render(vdom, document.getElementById("root"));
