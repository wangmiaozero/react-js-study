/*
 * @Description: 状态共享
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-06-01 15:12:08
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-01 19:45:32
 */ 
import React,{ useContext} from 'react';
import {ColorContext,UPDATA_COLOR} from './color';



function Buttons(params) {
  const {dispatch} = useContext(ColorContext)
  return(
    <div>
      <button onClick={()=>{
        dispatch({type:UPDATA_COLOR,color:'red'})
        }}>红色</button>
      <button onClick={()=>{
        dispatch({type:UPDATA_COLOR,color:'yellow'})
        }}>黄色</button>
    </div>
  )
}
export default Buttons