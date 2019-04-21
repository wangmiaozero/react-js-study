import React from "react"

export default function Hello(props){
    /* return null   //表示组件是空的 不会渲染*/
    // props.name = 'zs'
    console.log(props)
    // 结论：不论是 Vue 还是 React，组件中的 props 永远都是只读的；不能被重新赋值；
     return <div>hello world 组件传值 ---- {props.name}----{props.age}--------{props.gender}</div>
   }
  //把组件暴露出去
  // export default Hello