/*
 * @Description: 状态共享
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 13:42:06
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-01 17:38:16
 */ 

/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

*/

// hooks 写法
import React, {useContext} from 'react'
import { ColorContext} from './color';

function ShowArea(){
  const { color } = useContext(ColorContext)
  return (<div style={{color:color}}>
    字体颜色为blue
  </div>)
}


export default ShowArea