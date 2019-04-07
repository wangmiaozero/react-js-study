//1.导入包
import React from "react"
import ReactDOM from "react-dom"
let a = 10
let str = "你好 世界"
let boo = false
let title = '999'
let h1 = <h1>我是h1</h1>
const arr = [
  <h2>这是h2</h2>,
  <h3>这是h3</h3>
]
const arrStr = ['毛利兰', '柯南', '小五郎', '灰原哀']
const nameArr = []
arrStr.forEach(item =>{
    const temp = <h5 key={item}> {item} </h5>
    console.log(temp);
    nameArr.push(temp)
})

// ReactDOM.render(<div>{str}</div>,document.querySelector('#app'))
// ReactDOM.render(<div>{boo?"条件为真":"条件为假"}</div>,document.querySelector('#app'))
// ReactDOM.render(<div title={title}>{boo.toString()}</div>,document.querySelector('#app'))
// ReactDOM.render(h1,document.querySelector("#app"))
// ReactDOM.render(arr,document.querySelector("#app"))
// ReactDOM.render(nameArr,document.querySelector("#app"))
ReactDOM.render(<div>
   {arrStr.map(item => <div key={item}><h5>{item}</h5></div>)}
</div>,document.querySelector("#app"))