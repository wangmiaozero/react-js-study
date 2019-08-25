import React from 'react'

import {Button, Icon, Spin  } from 'antd'

export default class MovieDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      movieinfo: {}, // 电影详情
      isloading: true
    }
  }

  componentWillMount(){
    this.getMovieInfo()
  }

  render() {
    const info = this.state.movieinfo
    return <div>
      <Button type="primary" onClick={()=>this.props.history.go(-1)}>
        <Icon type="left" />Go back
      </Button>
      {
        this.state.isloading ? <div style={{ textAlign: 'center'}}><Spin size="large" /></div> : <div>
        <div style={{textAlign: 'center'}}>
          <h1>{info.title}</h1>
          <img src={this.state.movieinfo.images && this.state.movieinfo.images.large}/>
        </div>
        <p style={{lineHeight: '30px', textIndent: '2em'}}>{info.summary}</p>
      </div>
      }
    </div>
  }

  getMovieInfo =async ()=>{
    const res = await this.$http(this.baseURL + '/v2/movie/subject/' + this.props.match.params.id)
    const data = await res.json()
    console.log(data)
    this.setState({
      movieinfo: data,
      isloading: false
    })
  }
}