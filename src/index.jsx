// ES6内置API兼容处理
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>嘻嘻</div>
  </React.StrictMode>
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
