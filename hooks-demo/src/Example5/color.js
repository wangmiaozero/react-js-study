/*
 * @Description: 状态共享
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-06-01 15:32:55
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-01 19:34:19
 */ 

 import React, { createContext,useReducer } from 'react';


export const ColorContext  = createContext({});

export const UPDATA_COLOR = 'UPDATA_COLOR'

const reducer = (state,action)=>{
  switch(action.type){
    case UPDATA_COLOR:
      return action.color
      default:
        return state
  }
}

export const  Color = props=>{

  const [color,dispatch] = useReducer(reducer,'blue')

  return (
    <ColorContext.Provider value={{color,dispatch}}>
      {props.children}
    </ColorContext.Provider>
  )
}
/* export default {
  ColorContext,
  Color
} */