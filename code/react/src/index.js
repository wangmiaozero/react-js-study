// 1. 导入 React 包
import React from 'react'
import ReactDOM from 'react-dom'

import fetchJSONP from 'fetch-jsonp'
// 设置 自己的  baseURL
React.Component.prototype.baseURL = 'https://api.douban.com'
// 挂载 发起JSONP 请求的 API
React.Component.prototype.$http = fetchJSONP


// 2. 导入 App 根组件
import App from '@/components/App'

// 3. 调用 ReactDOM.render 方法，渲染根组件
ReactDOM.render(<App/>, document.getElementById('app'))