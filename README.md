# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 目录

{
"name": "reactproject",
"version": "0.1.0",
"private": true,
"dependencies": {
"@babel/core": "^7.16.0",
"@pmmmwh/react-refresh-webpack-plugin": "^0.5.3",
"@svgr/webpack": "^5.5.0",
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"babel-jest": "^27.4.2",
"babel-loader": "^8.2.3",
"babel-plugin-named-asset-import": "^0.3.8",
"babel-preset-react-app": "^10.0.1", //重写的目的:让语法包可以识别 React 的语法，实现代码转换
"bfj": "^7.0.2",
"browserslist": "^4.18.1",
"camelcase": "^6.2.1",
"case-sensitive-paths-webpack-plugin": "^2.4.0",
"css-loader": "^6.5.1",
"css-minimizer-webpack-plugin": "^3.2.0", //压缩 css
"dotenv": "^10.0.0",
"dotenv-expand": "^5.1.0",
"eslint": "^8.3.0",
"eslint-config-react-app": "^7.0.1",
"eslint-webpack-plugin": "^3.1.1",
"file-loader": "^6.2.0",
"fs-extra": "^10.0.0",
"html-webpack-plugin": "^5.5.0", //打包 html 将 js,css 自动打包到 html
"identity-obj-proxy": "^3.0.0",
"jest": "^27.4.3",
"jest-resolve": "^27.4.2",
"jest-watch-typeahead": "^1.0.0",
"mini-css-extract-plugin": "^2.4.5", //css 提取单独的文件
"postcss": "^8.4.4", //自动加前缀
"postcss-flexbugs-fixes": "^5.0.2",
"postcss-loader": "^6.2.1",
"postcss-normalize": "^10.0.1",
"postcss-preset-env": "^7.0.1",
"prompts": "^2.4.2",
"react": "^18.2.0", //框架核心
"react-app-polyfill": "^3.0.0",
"react-dev-utils": "^12.0.1",
"react-dom": "^18.2.0", //react 视图渲染核心【基于 react 构建 webapp】
"react-refresh": "^0.11.0",
"resolve": "^1.20.0",
"resolve-url-loader": "^4.0.0",
"sass-loader": "^12.3.0", //默认配置 sass
"semver": "^7.3.5",
"source-map-loader": "^3.0.0",
"style-loader": "^3.3.1",
"tailwindcss": "^3.0.2",
"terser-webpack-plugin": "^5.2.5", //js 压缩
"web-vitals": "^2.1.4", //性能检测工具
"webpack": "^5.64.4",
"webpack-dev-server": "^4.6.0",
"webpack-manifest-plugin": "^4.0.2",
"react-scripts": "5.0.1", //脚手架为了让项目目录更干净，把 webpack 等插件隐藏到了 node_modules 下,暴露后消失

},
"scripts": {
"start": "react-scripts start", //开发环境：本地启动 web 服务器，预览打包内容
"build": "react-scripts build", //生产环境：打包部署，打包内容输出到 dist 目录中
"test": "react-scripts test", //单元测试
"eject": "react-scripts eject" //暴露 webpack 配置规则，暴露后消失
},
"eslintConfig": { //词法检查
"extends": [
"react-app",
"react-app/jest"
]
},
"browserslist": { //设置浏览器兼容情况
"production": [ //postcss-loader+autoprefixer 设置 css 前缀，Babel-loader 把 ES6 编译成 ES5,但无法处理内置 ES6API 兼容，所以要利用 react-app-polyfill 插件
">0.2%", //使用率超过 0.2
"not dead", //忽略 ie
"not op_mini all" //不考虑欧朋浏览器
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
}
}
