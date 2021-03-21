/*
 * @Description: 组件A
 * @Version: 1.0
 * @Autor: 
 * @Date: 2020-08-07 20:48:05
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-03-21 15:53:29
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// a 组件是发送方
class ComA extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  handleClick = () =>{
    console.log('ComA:',this.props)
    this.props.sendAction();
  };
  render() { 
    return ( 
      <>
      <button onClick={this.handleClick}> + </button>
      </>
     );
  }
}
/* 
 * @param {*} dispatch
 * 这个函数要有一个返回值，返回值是一个对象
 */
const mapDispatchToProps = (dispatch) =>{
    return {
      sendAction:()=>{
        // dispatch 发送一个action
        // 传递action  定义一个type属性
        dispatch({
          type:'add_action'
        })
      }
    }
};

/* 
 ComA 发送 action
 1. 导入 connect
 2. 利用 connect 对组件进行加强
  参数
  connect(要接受数组的函数，要发送action的函数)(放入要加强的组件)

 3. 实现connect 第二个参数
 4. 构建一个函数mapDispatchToProps(dispatch)
    dispatch: 就是用来发送给 action 的
 5. 在这个函数里面就可以返回一个对象
    key: 是方法名
    value: 调用dispatch 去发送action
 6. 在组件的内容就可以通过 this.props 来拿到这个方法了
*/

export default connect(null,mapDispatchToProps)(ComA);