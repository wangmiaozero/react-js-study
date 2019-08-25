import React from 'react'

import { Spin, Card, Rate, Pagination   } from 'antd'
const { Meta } = Card;

import cssobj from '@/css/movielist.scss'

export default class MovieList extends React.Component {
  constructor(props) {
    super()
    this.state = {
      mtype: props.match.params.type, // 电影类型
      nowPage: props.match.params.page, // 当前的页码值
      pageSize: 10, // 每页显示 10 条数据
      isloading: true, // 是否正在加载数据， 默认为 加载中
      movielist: [], // 电影列表
      total: 0, //总数据条数
    }
  }

  render() {
    // axios   fetch   fetch-jsonp
    return <div>
      {
        this.state.isloading ? <div style={{textAlign: 'center'}}><Spin size="large" /></div> : <div>
          <div className={cssobj.mlist}>
          {
            this.state.movielist.map(item => <Card key={item.id}
              hoverable
              style={{ width: 210 }}
              className={cssobj.mitem}
              cover={<img alt="example" src={item.images.small} 
              onClick={()=>this.goDetail(item.id)}
              />}
            >
              <Meta
                title={item.title}
              />
              <p>电影类型：{item.genres.join('，')}</p>
              <Rate disabled defaultValue={item.rating.average / 2} />
            </Card>)
          }
        </div>
        <Pagination defaultCurrent={parseInt(this.state.nowPage)} total={this.state.total} defaultPageSize={this.state.pageSize} onChange={(page, pageSize)=>this.pageChanged(page)} />
        </div>
      }
    </div>
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps)
    this.setState({
      mtype: nextProps.match.params.type, 
      nowPage: nextProps.match.params.page,
      isloading: true
    }, function(){
      setTimeout(()=>{
        this.getMovieList()
      }, 1000)
    })
  }

  // 组件将要挂载
  componentWillMount(){
    // 获取电影列表数据
    setTimeout(()=>{
      this.getMovieList()
    }, 1000)
  }

  // 获取电影列表
  getMovieList = async()=>{
    // start 表示 从哪个位置开始查询电影
    //   1页    0           公式  (当前页码值 - 1) * pageSize
    //   2页    10
    //   3页    20
    //   4页    30
    // count 表示获取多少条数据
    // 获取到 偏移量
    const start = (this.state.nowPage - 1) * this.state.pageSize
    // 发起请求
    const res =  await this.$http(this.baseURL + '/v2/movie/' + this.state.mtype + '?start=' + start + '&count=' + this.state.pageSize)
    const data = await res.json()
    console.log(data)
    this.setState({
      movielist: data.subjects,
      isloading: false,
      total: data.total
    })
  }

  // 页码改变时候的回调函数
  pageChanged = (page)=>{
    // console.log(page)
    // 使用编程式导航
    this.props.history.push(`/movie/${this.state.mtype}/${page}`)
  }

  // 跳转到详情页
  goDetail = (id)=>{
    // console.log(id)
    this.props.history.push('/movie/detail/' + id)
  }
}