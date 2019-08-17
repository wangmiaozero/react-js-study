import React from 'react'
export default class Home extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  render() {
    return <div>
      <h1>Home组件</h1>
      <button onClick={() => this.goAbout()}>去关于页面</button>
      <button onClick={() => this.getMovie()}>使用fetch-json获取 正在热映的电影</button>
    </div>
  }
  goAbout = () => {
    this.props.history.push('/about')
  }
  getMovie = async () =>{
    console.log('ok')
  }
}