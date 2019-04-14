//1.导入包
import React from "react"
import ReactDOM from "react-dom"
//第一种创建组件的方法
function Hello(props){
 /* return null   //表示组件是空的 不会渲染*/
 // props.name = 'zs'
 // 结论：不论是 Vue 还是 React，组件中的 props 永远都是只读的；不能被重新赋值；
  return <div>hello world 组件传值 ---- {props.name}----{props.age}</div>
}
const dog = {
  name:'大黄',
  age:3,
  gender:'雄性'
}
ReactDOM.render(<div>
 {/* <Hello></Hello>组件渲染方法 */}
{/* <Hello name={dog.name} age={dog.age}></Hello> */}
<Hello {...dog}></Hello>
</div>,document.querySelector("#app"))
//展开运算符

/* var o2 = {
  age: 22,
  address: '中国北京',
  phone: '139999'
}

var o1 = {
  name: 'zs',
  ...o2
}

console.log(o1) */