import React from 'react'
import { Button } from 'antd';
export default class Home extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  render() {
    return <div>
      <h1>Home组件</h1>
      <Button type="primary">Primary</Button>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <button onClick={() => this.goAbout()}>去关于页面</button>
      <button onClick={() => this.getMovie()}>使用fetch-json获取 正在热映的电影</button>
    </div>
  }
  goAbout = () => {
    this.props.history.push('/about')
  }
  getMovie = async () =>{
    console.log('ok')
    
    // fetch-jsonp 结合 async 和 await 使用

    const res = await this.$http('https://api.douban.com/v2/movie/in_theaters')
    const data = await res.json()
    console.log(data)
  }
}