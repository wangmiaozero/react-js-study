// 1.导入包
import React from 'react'
import ReactDOM from 'react-dom'
// 导入 fetch-json 挂载到 每个组件上
import fetchJONP from 'fetch-jsonp'

// 挂载每个组件上并且挂载到原型上
React.Component.prototype.$http = fetchJONP
// 导入 根组件
import App from '@/components/App'
// render 函数渲染
// 按需导入 Antd 的组件
import { DatePicker } from 'antd'

// 全局导入 所有的 Antd 样式表
// 注意： 如果 配置 了 babel-plugin-import, 则我们就不再需要手动导入 样式表了；
// import 'antd/dist/antd.css'
ReactDOM.render(<div>
   {/* <DatePicker /> */}
   <App />
</div>,document.getElementById('app'))