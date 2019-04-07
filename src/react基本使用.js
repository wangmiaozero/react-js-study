console.log('ok');
//导入react

// 1. 这两个导入时候，接收的成员名称，必须这么写
import React from "react" //创建组件 虚拟DOM元素 生命周期
import ReactDOM from "react-dom" //把创建好的组件和虚拟DOM放到 页面上展示
//2.创建虚拟DOM元素
//参数1:创建的元素的类型,字符串,表示元素的名字
//参数2:是一个对象或null表示当前这个dom元素的属性
//参数3:子节点(包括 其他 虚拟dom 获取 文本子节点)
//参数n:其他子节点
const myh1 = React.createElement("h1",{id:'myh1',title:"this is a h1"},"我是h1")
const mydiv = React.createElement('div',null,'我是div',myh1)

//3/使用ReactDOM 把虚拟DOM渲染到页面上
//参数1:要渲染的那个虚拟DOM元素
//参数2:指定页面上的DOM元素,当作容器
ReactDOM.render(mydiv,document.querySelector('#app'))
