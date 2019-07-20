// react 中绑定事件的标准格式
import React from 'react'
export default class bindEvernt extends React.Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return <div>
              <button type="button" onClick={() =>this.fn('🐷', '🍕')} >button</button>
          </div>
  }
  fn = (arg1,arg2) => {
    console.log('fn方法被调用了' + arg1 + arg2)
  }
}