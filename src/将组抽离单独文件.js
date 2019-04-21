//1.导入包
import React from "react"
import ReactDOM from "react-dom"
//第一种创建组件的方法 //组件首字母大写 导入组件
import Hello from '@/cnmponents/Hello'

const dog = {
  name:'大黄',
  age:3,
  gender:'雄性'
}
//展开运算符
ReactDOM.render(<div>
 {/* <Hello></Hello>组件渲染方法 */}
{/* <Hello name={dog.name} age={dog.age}></Hello> */}

<Hello {...dog}></Hello>
</div>,document.querySelector("#app"))
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