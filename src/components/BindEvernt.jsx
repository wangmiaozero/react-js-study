import React from 'react'
export default class bindEvernt extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '哈哈',
      name: 'zs',
      age: 22,
      gender: '男'
    }
  }
  render() {
    return <div>
      {/* 需求：点击按钮，把修改 msg 的值 */}
      <button onClick={() => this.show('🐷', '🍕')}>按钮</button>
      <h3>{this.state.msg}</h3>
    </div>
  }
  show = (arg1, arg2) => {
    // console.log('show方法被调用了' + arg1 + arg2)
    // 注意：React 中，如果想为 state 中的数据，重新赋值，不要使用 this.state.*** = 值
    // 应该 调用 React 提供的 this.setState({ msg: '123' })
    // this.state.msg = 'oooooo'
    // 在 React 中，推荐使用 this.setState({ }) 修改 状态值
    this.setState({
      // 在 setState ，只会把 对应的 state 状态更新，而不会 覆盖其它的 state 状态
      msg: '123' + arg1 + arg2
    }, function () { // 回调
      console.log(this.state.msg,"最新的值")
    })
    // 注意： this.setState 方法的执行，是异步的；
    //  调用完 this.setState 之后，又想立即拿到 最新的 state 值，需要使用 this.setState({}, callback)
  }
}