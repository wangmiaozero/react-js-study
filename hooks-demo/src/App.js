/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 11:50:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-28 19:36:37
 */ 
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './Example';
import Example2 from './Example2';
import Example3 from './Example3';
import ReducerDemo from './Example4';
import Example5 from './Example5/Example5';
import Example6 from './Example6';
import Example7 from './Example7';
import Example8 from './Example8';
import Example9 from './Example9';
import Home from './components/Home';
import List from './components/List';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Example
        <Example/>
        <br/>
        Example2
        <Example2/>
        <br/>
        Example3
        <Example3/>
        <br/>
        ReducerDemo/Example4
        <ReducerDemo/>
        <br/>
        Example5/状态共享
        <Example5 />
        <br/>
        Example6
        <Example6/>
        <br/>
        Example7
        <Example7/>
        <br/>
        Example8--ref
        <Example8/>
        Example9 
        <Example9/>
      </header>
      <Router>
         <ul>
           <li><Link to="/">首页</Link></li>
           <li><Link to="/list">列表</Link></li>
         </ul>
         <Route path="/" exact={true} component={Home}></Route>
         <Route path="/list"  component={List}></Route>
       </Router>
    </div>
  );
}

export default App;
