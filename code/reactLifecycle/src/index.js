// 1.导入包
import React from 'react'
import ReactDOM from 'react-dom'
import LifeCycle from '@/components/LifeCycle'
// 用来 包裹 counter 组件的 父组件
class Wrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      c:99// 将来会当作 属性, 传递给counter 组件的 initcount
    }
  }
  render(){
    return <div>
      
      <button onClick={()=> this.addC()}  type="button" >让Wrapper 中的c自增</button>
      <h6>当前最新的c值为:{this.state.c}</h6>
      <hr />

      {/* 注意: 当状态c 值改变了,必然会重新执行render 函数 */}
      {/* 在执行 render 函数的时候,lifeCycle组件引用了 状态 c  */}
      {/* 接下来,有两个方案: */}
      {/*   方案1：删除 旧的 LifeCycle， 重新创建一个新的 LifeCycle，并替换到页面上原来的位置 */}
      {/*   方案2：只更新 旧的 LifeCycle 的 数据，但是不会重新 创建一遍这个组件； */}
      <p>下面是生命周期组件:</p>
      <LifeCycle initcount={this.state.c}></LifeCycle>
    </div>
  }
  // 当点击按钮,让C自增 + 1
  addC = () =>{
    this.setState({
      c:this.state.c + 1
    })
  }
}

// 调用render 函数渲染
ReactDOM.render(<div>
  2333
  <Wrapper></Wrapper>
</div>,document.getElementById('app'))
