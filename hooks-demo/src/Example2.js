/*
 * @Description: 例子hooks
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 13:42:06
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-03 08:57:27
 */ 

/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

  函数组件中不能拥有自己的状态（state）。在hooks之前函数组件是无状态的，都是通过props来获取父组件的状态，但是hooks提供了useState来维护函数组件内部的状态。

  函数组件中不能监听组件的生命周期。useEffect聚合了多个生命周期函数。

  class组件中生命周期较为复杂（在15版本到16版本的变化大）。

  class组件逻辑难以复用（HOC，render props）。

*/

// hooks 写法
import React, { useState  } from 'react';
function Example2(){
  // useState 申明 
   const [ age, setAge ] = useState(18)// 数组结构
   const [ sex, setSex ] = useState('男')// 数组结构
   const [ work, setWork ] = useState('全栈')// 数组结构
  return (
    <div>
       <p> 年龄:{age}</p>
       <p> 性别:{sex}</p>
       <p> 工作:{work}</p>
       <button onClick={()=>setAge(age+1)}>增加年龄</button>
       <button onClick={()=>setSex(sex='女')}>改变性别</button>
       <button onClick={()=>setWork(work='前端')}>改变工作</button>
    </div>
  )
}

export default Example2;
