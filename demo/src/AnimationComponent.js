/*
 * @Description: react-transition-group 动画库
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-24 19:30:19
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-24 20:36:49
 */ 
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './AnimationComponent.css'

/* 
 react-transition-group

unmountOnExit 可以直接删除dom 动画
*/
class AnmationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow:true
     }
     this.toToggole = this.toToggole.bind(this)
  }
  render() { 
    return ( 
      <div>
        <CSSTransition 
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
          unmountOnExit
        >
          <div>我是动画</div>
        </CSSTransition>
        <div><button onClick={this.toToggole}>执行</button></div>
      </div>
     );
  }
  toToggole(){
    this.setState({
      isShow:this.state.isShow =! this.state.isShow
    })
  }
}
 
export default AnmationComponent;
