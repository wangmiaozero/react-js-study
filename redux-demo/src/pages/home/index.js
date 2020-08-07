/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 
 * @Date: 2020-08-07 14:45:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-07 19:25:57
 */
import React, { Component } from 'react';
// 导入store
import store from '../../store';
// 导入action构造函数
import { sendAction } from '../../action';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  handleClick = () =>{
    // 发送action
    const action = sendAction()
    store.dispatch(action)
  }
  
  componentDidMount(){
    // 是一个回调函数
    store.subscribe(()=>{
      console.log('subscribe:',store.getState())
      this.setState({})
    })
  }
  render() { 
    return ( 
      <>
      <button onClick={this.handleClick}>btn</button>
      <div>{store.getState().value}</div>
      </>
     );
  }
}
 
export default Home;