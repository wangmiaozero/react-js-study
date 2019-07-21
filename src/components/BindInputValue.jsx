import React from 'react'
export default class BindEvent extends React.Component{
  constructor (){
    super()
    this.state = {
      msg:'呵呵呵呵呵',
      name:'布洛妮娅',
      age:22,
      gender:'女'
    }
  }
  render(){
    return <div>
      {/* 需求:店家按钮,把修改msg的值 */}
      <button type="button" onClick={()=>this.show('🐷', '🍕')}>button</button>
      <h3>{this.state.msg}</h3>
      <h3>{this.state.name}</h3>
      <h3>{this.state.age}</h3>
      <h3>{this.state.gender}</h3>
       {/* 如果 我们只是把 文本框的 value 属性，绑定到了 state 状态，但是，如果不提供 onChagne 处理函数的话，得到的文本框，将会是一个只读的文本框 */}

      {/* 当 为 文本框绑定 value 值以后，要么同时提供一个 readOnly， 要么，提供一个 onChange 处理函数 */}
      {/* <input type="text" style={{ width: '100%' }} value={this.state.msg} readOnly /> */}
      <input type="text" style={{width:'100%'}}
      value={this.state.msg} 
      onChange={(e)=>this.txtChanged(e)} 
      ref="txt"></input>
    </div>
  }
  //每当文本框的内容变化了,必然会调用这个txtChanged
  txtChanged = (e) =>{
    // 在 onChange 事件中，获取 文本框的值，有两种方案：
    // 方案1： 通过 事件参数 e 来获取；
    console.log(e)
    console.log(e.target.value);
    console.log(e.target)
    console.log(this.refs.txt.value)
    const newVal = e.target.value 
    this.setState({
      msg:newVal
    })
  }
  show = (arg1,arg2) =>{
    console.log('show方法被调用了'+arg1 + arg2)
    // 注意：React 中，如果想为 state 中的数据，重新赋值，不要使用 this.state.*** = 值
    // 应该 调用 React 提供的 this.setState({ msg: '123' })
    // this.state.msg = 'oooooo'
    this.setState({
      msg: '123' + arg1 + arg2
    },function(){console.log(this.state.msg)})
     // 注意： this.setState 方法的执行，是异步的；
    // 如果 调用完 this.setState 之后，又想立即拿到 最新的 state 值，需要使用 this.setState({}, callback)
  }
}