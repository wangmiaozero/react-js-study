/*
 * @Description: 例子
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 13:42:06
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-28 15:53:54
 */ 

/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

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
       {/* <button onClick={()=>setSex(sex='女')}>改变性别</button>
       <button onClick={()=>setWork(work='前端')}>改变工作</button> */}
    </div>
  )
}

export default Example2;
