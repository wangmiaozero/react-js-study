/*
 * @Description: useReducer使用
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 13:42:06
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-01 14:14:14
 */ 

/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

*/

// hooks 写法
import React, { useState,useEffect,createContext, useContext,useReducer } from 'react'

function ReducerDemo() {
  const [count,dispatch] = useReducer((state,action)=>{
    switch(action){
      case 'add':
        return state+1;
      case 'sub':
        return state-1
        default:
          return state
    }
  },0)

  return (
    <div>
      <h2>现在的分数{count}</h2>
      <button onClick={()=>{dispatch('add')}}>Increment</button>
      <button onClick={()=>{dispatch('sub')}}>Decrement</button>
    </div>
  )
}

export default ReducerDemo