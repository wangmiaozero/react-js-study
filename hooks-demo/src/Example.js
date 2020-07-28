/*
 * @Description: 例子 生命周期
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 13:42:06
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-03 10:49:40
 */ 

/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

  函数组件中不能拥有自己的状态（state）。在hooks之前函数组件是无状态的，都是通过props来获取父组件的状态，但是hooks提供了useState来维护函数组件内部的状态。

  函数组件中不能监听组件的生命周期。useEffect聚合了多个生命周期函数。

  class组件中生命周期较为复杂（在15版本到16版本的变化大）。

  class组件逻辑难以复用（HOC，render props）。

*/

// class组件

/* import React, { Component } from 'react';
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count:0
     }
  }
  render() { 
    return ( <div>
     <p> 数值:{this.state.count}</p>
     <button onClick={this.addCount.bind(this)}>增加</button>
    </div> );
  }
  addCount(){
    this.setState({
      count:this.state.count+1
    })
  }
} */
 

// hooks 写法
import React, { useState,useEffect } from 'react';
function Example(){
  // useState 申明 
  // const [ count, setCount ] = useState(0)// 数组结构
  let _userState = useState(0);
  let count = _userState[0]
  let setCount = _userState[1];

/*  
    useEffect是异步的在组件渲染完成后才会执行
    useEffect的回调函数只能返回一个清除副作用的处理函数或者不返回
    如果useEffect传入的依赖项是空数组那么useEffect内部的函数只会执行一次
*/
/* 
useEffect(() => {
  //handler function...
  
  return () => {
      // clean side effect
  }
}, [//dep...])
 */

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
    </div>
  )
}

// 可以看到使用hooks的代码相比class组件代码更加的简洁、清晰。

export default Example;
