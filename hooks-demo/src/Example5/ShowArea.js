/*
 * @Description: 状态共享
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 13:42:06
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-03 08:59:15
 */ 

/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

  函数组件中不能拥有自己的状态（state）。在hooks之前函数组件是无状态的，都是通过props来获取父组件的状态，但是hooks提供了useState来维护函数组件内部的状态。

  函数组件中不能监听组件的生命周期。useEffect聚合了多个生命周期函数。

  class组件中生命周期较为复杂（在15版本到16版本的变化大）。

  class组件逻辑难以复用（HOC，render props）。

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