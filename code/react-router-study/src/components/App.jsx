import React from 'react'
// 导入 需要的路由组件
// Route 由两个身份： 1. 代表一个路由规则  2. 表示一个路由匹配到的组件呈现的容器；
//      1. path 表示要匹配的路由规则
//      2. component 表示要展示的组件
//      3. exact 精确匹配的路由规则   注意：如果Route不设置 exact 属性，则 默认为 模糊匹配的路由规则
import { HashRouter, Route, Link, Redirect } from 'react-router-dom'
// 导入路由需要组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import Top250 from '@/components/Top250'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render(){
    return <HashRouter>
       {/* 注意： HashRouter 内部，只允许放唯一的一个元素 */}
       <div>
         <h3>App 跟组件</h3>
         <Link to="/home">首页</Link>&nbsp;&nbsp;
         <Link to="/movie">电影</Link>&nbsp;&nbsp;
         <Link to="/movie/top250">top250</Link>&nbsp;&nbsp;
         <Link to="/about">关于</Link>&nbsp;&nbsp;
         <hr />
           {/* 路由规则 */}
        {/* 模糊匹配的含义：把 Link 的 to 属性 
        和 Route 的 path ，从前到后进行匹配，只要 Link 的 to 属性中，
        包含 Route 的 path 即可；不一定非要让 to === path */}
        <Route exact path="/" render={()=><Redirect to="/home"></Redirect>}></Route>
        <Route path="/home" component={Home} />
         {/* exact 表示 精确匹配，含义是：只有 Link 的 to 属性，
        完全等于 Route 的 path 的时候，才会展示对应的 component 组件 */}
        <Route path="/movie" component={Movie} exact />
        <Route path="/movie/:type1" component={Top250} exact />
        <Route path="/about" component={About}/>
       </div>
    </HashRouter>
  }
}
