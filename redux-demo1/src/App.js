/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 
 * @Date: 2020-08-07 20:14:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-07 20:52:25
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComA from './pages/ComA'
// 导入 store
import store from './store';
function App() {
  return (
    <div className="App">
      <ComA/>
    </div>
  );
}

export default App;
