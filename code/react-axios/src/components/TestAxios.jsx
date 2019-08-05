import React from 'react'

export default class TestAxios extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <div>
      <button onClick={() => this.getInfo()}>发起Get请求</button>

      <button onClick={() => this.postInfo()}>发起Post请求</button>

    </div>
  }

  // 发起 Get 请求
  getInfo = async () => {
    // Promise ???
    /* this.$http('http://39.106.32.91:3000/api/getlunbo').then(result => {
      console.log(result.data)
    }) */

    // 使用 ES7 的 async 和 await 来优化 Promise 的调用
    const { data } = await this.$http('/api/getlunbo')
    console.log(data)
  }

  // 发起 Post 请求
  postInfo = async () => {
    // 大家注意： 在Ajax发起 Post 请求的时候，如果没有 指定 Content-Type， 则默认 为  text/plain; charset=utf-8
    // 一般情况下，服务认为 客户端 Ajax 发送的数据类型是 application/x-www-form-urlencoded
    // form 表单元素，默认有 属性  enctype="application/x-www-form-urlencoded"
    /* this.$http.post('http://39.106.32.91:3000/api/post', {
      name: '张三',
      age: 22
    }, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(res => {
        console.log(res)
      }) */


    // 如果要发起Post请求，同时给服务器提交参数，则提交给服务器的 数据， 不能写成对象，需要自己拼接成查询字符串
    /* this.$http.post('http://39.106.32.91:3000/api/post', 'name=zs&age=22').then(res => {
      console.log(res)
    }) */


    /* this.$http.post('/api/post', {
      name: 'zs',
      age: 33
    }).then(res => {
      console.log(res)
    }) */


    const { data } = await this.$http.post('/api/post', {
      name: 'zs',
      age: 33
    })

    console.log(data)
  }
}