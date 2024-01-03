// import { createElement, render } from "./jsxHandle";
// import PropsDome from "@/components/test/SlotTest";
// import ClassComponent from "./components/test/ClassConponentTest";
// import MobileClick from "@/components/test/MobileClick";
// ES6内置API兼容处理
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "@/assets/reset.css";
import "@/index.less";

import React from "react";
import ReactDOM from "react-dom/client";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import ToDoList from "./components/test/ToDoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCN}>
    <ToDoList></ToDoList>
  </ConfigProvider>
);

// 父组件数据改变
// setTimeout(() => {
//   root.render(
//     <>
//       <div className="title">嘻嘻</div>
// <div>aa</div>
// <PropsDome>
//   <div slot="header">页眉</div>
//   <div>自定义</div>
//   <div slot="footer">页脚</div>
// </PropsDome>
// <ClassComponent title="标题"></ClassComponent>
// <MobileClick></MobileClick>
//     </>
//   );
// }, 5000);

// 实现虚拟dom和render
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
