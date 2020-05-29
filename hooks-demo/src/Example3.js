/*
 * @Description: 子组件传值
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 13:42:06
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-29 20:34:58
 */ 

/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

*/

// hooks 写法
import React, { useState,useEffect,createContext  } from 'react';
// 相当于创建了一个组件
const CountCountext = createContext();
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
       <CountCountext.Provider value = {count}></CountCountext.Provider>
    </div>
  )
}

export default Example3;
