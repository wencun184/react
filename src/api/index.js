import axios from "axios";
import qs from "qs";
const request = axios.create();
request.defaults.baseURL = "https://api.example.com";
// request.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// request.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
request.defaults.timeout = 6000;

// 添加请求拦截器
request.interceptors.request.use(
  function (response) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default request;
