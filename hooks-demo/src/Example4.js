/*
 * @Description: useReducer使用
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 13:42:06
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-30 17:54:57
 */ 

/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

*/

// hooks 写法
import React, { useState,useEffect,createContext, useContext,useReducer } from 'react'

function Example4(){
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
     {/*   <CountCountext.Provider value = {count}>
         <Counter/>
       </CountCountext.Provider> */}
    </div>
  )
}

export default Example4;
