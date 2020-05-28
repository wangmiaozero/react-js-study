/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 11:50:42
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-28 15:13:19
 */ 
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './Example'
import Example2 from './Example2'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example/>
        <br/>
        <Example2/>
      </header>
    </div>
  );
}

export default App;
