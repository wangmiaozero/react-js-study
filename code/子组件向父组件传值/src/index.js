// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 导入评论列表组件
import CmtList from '@/components/CmtList2'

// 3. 调用 render 函数渲染
ReactDOM.render(<div>
  <CmtList></CmtList>
</div>, document.getElementById('app'))