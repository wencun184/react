// ES6内置API兼容处理
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";
import { createElement, render } from "./jsxHandle";
import "@/index.less";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <div className="title">嘻嘻</div>
//     <div>aa</div>
//   </>
// );

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

const x = 10;
const y = "20";
const vdom = createElement(
  "div",
  null,
  createElement("h2", { className: "title" }, 10),
  createElement(
    "div",
    { style: { fontSize: "18px" } },
    createElement("span", null, x),
    createElement("span", null, y)
  )
);
render(vdom, document.getElementById("root"));
