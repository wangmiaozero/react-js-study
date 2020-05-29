/*
 * @Description: 例子 生命周期
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-28 13:42:06
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-29 20:27:10
 */ 

/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

*/

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
import React, { useState,useEffect  } from 'react';
function Example(){
  // useState 申明 
  // const [ count, setCount ] = useState(0)// 数组结构
  let _userState = useState(0);
  let count = _userState[0]
  let setCount = _userState[1];
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

export default Example;
