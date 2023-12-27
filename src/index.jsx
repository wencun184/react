// ES6内置API兼容处理
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";
import { createElement } from "./jsxHandle";
import "@/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div style={{ color: "red" }}>嘻嘻</div>
    <div>aa</div>
  </>
);

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
console.log(
  React.createElement(
    React.Fragment,
    null,
    React.createElement("h2", { className: "title" }, 10),
    React.createElement(
      "div",
      { className: "box" },
      React.createElement("span", null, 10),
      React.createElement("span", null, 10)
    )
  )
);
console.log(
  createElement(
    React.Fragment,
    null,
    createElement("h2", { className: "title" }, 10),
    createElement(
      "div",
      { className: "box" },
      createElement("span", null, 10),
      createElement("span", null, 10)
    )
  )
);
