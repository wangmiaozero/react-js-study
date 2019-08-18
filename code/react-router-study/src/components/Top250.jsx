import React from 'react'
export default class Top250 extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
     // 在路由中，如果要获取参数，则需要使用 this.props.match.params 
    console.log(this.props)
    return <div>
      <h3>排行Top250 的电影列表 --- {this.props.match.params.type1}</h3>
    </div>
  }
}