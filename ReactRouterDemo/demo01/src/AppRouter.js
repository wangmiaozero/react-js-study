/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-24 22:39:26
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-24 23:27:09
 */ 
import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link }  from 'react-router-dom'
import Index from  './pages/Index';
import List from  './pages/List';
 
function AppRouter(params) {
  return <Router>
    <ul>
      <li> <Link to="/">首页</Link></li>
      <li> <Link to="/list/123">列表</Link></li>
    </ul>
    <Route path="/" exact component={Index}></Route>
    <Route path="/list/:id"  component={List}></Route>
  </Router>
}

export default AppRouter;
