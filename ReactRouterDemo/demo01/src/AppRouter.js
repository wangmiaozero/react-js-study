/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-24 22:39:26
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-27 14:30:41
 */ 
import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Redirect}  from 'react-router-dom'
import Index from  './pages/Index';
import List from  './pages/List';
import Home from './pages/Home';
 
function AppRouter(params) {
  return <Router>
    <ul>
      <li> <Link to="/index">首页</Link></li>
      <li> <Link to="/list">列表</Link></li>
    </ul>
    <Route exact path="/" render={()=><Redirect to="/home"></Redirect>}></Route>
    <Route path="/home" exact  component={Home}></Route>
    <Route path="/index" exact component={Index}></Route>
    <Route path="/list/:id" exact component={List}></Route>
   
  </Router>
}

export default AppRouter;
