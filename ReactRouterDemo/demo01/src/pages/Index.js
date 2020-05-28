/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-24 23:18:07
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-27 14:30:05
 */ 
import React, { Component } from 'react';

import { Link,Redirect } from 'react-router-dom';
class Index  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[
        {av:0,name:'八重樱'},
        {av:1,name:'琪亚娜'},
        {av:2,name:'芽衣'},
        {av:3,name:'德丽莎'}
      ]
     }
     // console.log(this.props.history.replace('/home'))
   //  this.props.history.push('/home') //这种也可以重定向页面 
  }
  render() { 
    return ( 
      <div>
        <h2>我是首页</h2>
        <ul>
        {/* 动态传值 */}
          {this.state.list.map((item,index)=>{return(<li key={index}><Link to={'/list/'+item.av}>{item.name}</Link></li>)})}
        </ul>
      </div>
     );
  }
}
 
export default Index;