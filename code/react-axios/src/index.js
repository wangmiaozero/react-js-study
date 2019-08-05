import React from 'react'
import ReactDOM from 'react-dom'
// 导入全局配置文件
import '@/globalConfig'
// 导入组件
import TestAxios from '@/components/TestAxios'
// 调用render 函数渲染
ReactDOM.render(<div>
  <TestAxios></TestAxios>
</div>,document.getElementById('app'))