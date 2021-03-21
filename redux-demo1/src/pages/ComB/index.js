/*
 * @Description: 组件B
 * @Version: 1.0
 * @Autor: 
 * @Date: 2020-08-07 20:48:05
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-03-21 21:49:15
 */
import React, { Component } from 'react';
// 导入connect
import { connect } from 'react-redux';

class ComB extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log('ComB：',this.props)
    return ( 
      <>
      <div>{this.props.count}</div>
      </>
     );
  }
}

/* 
* 接受 两个参数
*/

const mapStateToProps = (state) =>{
  console.log('ComB：',state)
  return state;
};

/* 
 ComB 接受 state
 1. 导入 connect
 2. 利用 connect 对组件进行加强
  参数
  connect(要接受数组的函数，要发送action的函数)(放入要加强的组件)

 3. ComB属于是接受方，就需要实现 connect的第一个参数
 4. mapStateToProps 里面的一个参数就是我们很关心 state
 5. 把这个state 进行 return 才能在组件的内部获取到 最新的数据
*/

export default connect(mapStateToProps)(ComB);