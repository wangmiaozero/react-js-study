//1导入依赖包
// import React,{Components} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
//2.引入组件
import CmtList from '@/components/2/CmtList'
//import BindEvernt from '@/components/3/BindEvernt'
import BindEvernt from '@/components/BindEvernt'
//console.log(BindEvent)
//3. 调用render 函数渲染
ReactDOM.render(<div>
  122
  <CmtList></CmtList>
  <BindEvernt></BindEvernt>
</div>,document.getElementById('app'))
