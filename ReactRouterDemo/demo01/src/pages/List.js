/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-24 23:19:46
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-24 23:30:55
 */ 
import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id:''
     }
  }
  render() { 
  return ( <h2>列表--分页--{this.state.id}</h2> );
  }
  componentDidMount(){
    console.log(this.props)
    console.log(this.props.match.params.id)
    this.setState({
      id:this.props.match.params.id
    })
  }
}
 
export default List;