/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 
 * @Date: 2020-08-07 20:14:02
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-03-21 15:44:10
 */
import React from 'react';
import './App.css';
// 引入a组件
import ComA from './pages/ComA'
// 引入b组件
import ComB from './pages/ComB'
// 导入 store
import store from './store';
// 导入Provider 组件 包裹我们的结构，从而达到统一维护store 效果
import { Provider } from 'react-redux';
// 给我们Provider 组件设置 store 的属性，而这个值就是我们通过createStore
// 构建出来的store 实例对象
function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <ComA/>
        <ComB/>
      </div>
    </Provider>
  );
}

export default App;
