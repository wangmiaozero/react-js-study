// 1. 这两个导入时候，接收的成员名称，必须这么写
import React from "react" //创建组件 虚拟DOM元素 生命周期
import ReactDOM from "react-dom" //把创建好的组件和虚拟DOM放到 页面上展示
//2.创建虚拟DOM元素
//参数1:创建的元素的类型,字符串,表示元素的名字
//参数2:是一个对象或null表示当前这个dom元素的属性
//参数3:子节点(包括 其他 虚拟dom 获取 文本子节点)
//参数n:其他子节点
// const myh1 = React.createElement("h1",{id:'myh1',title:"this is a h1"},"我是h1")
// const mydiv = React.createElement('div',null,'我是div',myh1)
// // HTML 是最优秀的标记语言；
// 注意： 在 JS 文件中，默认不能写 这种 类似于 HTML 的标记；否则 打包会失败；
// 可以使用 babel 来转换 这些 JS 中的标签；
// 大家注意：这种 在 JS 中，混合写入类似于 HTML 的语法，叫做 JSX 语法； 符合 XML 规范的 JS ；
// 注意： JSX 语法的本质，还是 在运行的时候，被转换成了 React.createElement 形式来执行的；
const mydiv = <div id="mydiv" title="this is a div">我是div
        <p>我是p</p>
        <h1>我是h1</h1>
</div>
//3/使用ReactDOM 把虚拟DOM渲染到页面上
//参数1:要渲染的那个虚拟DOM元素
//参数2:指定页面上的DOM元素,当作容器
ReactDOM.render(mydiv,document.querySelector('#app'))
