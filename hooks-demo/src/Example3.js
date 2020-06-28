/*
 * @Description: 父子组件传值
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 13:42:06
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-03 08:58:01
 */ 

/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

  函数组件中不能拥有自己的状态（state）。在hooks之前函数组件是无状态的，都是通过props来获取父组件的状态，但是hooks提供了useState来维护函数组件内部的状态。

  函数组件中不能监听组件的生命周期。useEffect聚合了多个生命周期函数。

  class组件中生命周期较为复杂（在15版本到16版本的变化大）。

  class组件逻辑难以复用（HOC，render props）。

*/

// hooks 写法
import React, { useState,useEffect,createContext, useContext  } from 'react';
// 相当于创建了一个组件
const CountCountext = createContext();
// 子组件
function Counter(){
  let count = useContext(CountCountext)
  return(<h2>这是父组件的值: {count}</h2>)
}

function Example3(){
  // useState 申明 
   const [ count, setCount ] = useState(0)// 数组结构
  // useEffect 相当于componentDidMount/componentDidUpdate
  //  React 中componentDidMount,就相当于Vue中mounted
  //  运行阶段 第三个生命周期函数 【组件已被更新】
  useEffect(()=>{
    console.log(`useEffect=> ${count}`)
  })
  return (
    <div>
       <p> 数值:{count}</p>
       <button onClick={()=>setCount(count+1)}>增加</button>
       <CountCountext.Provider value = {count}>
         <Counter/>
       </CountCountext.Provider>
    </div>
  )
}

export default Example3;
