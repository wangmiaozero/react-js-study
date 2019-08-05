import React from 'react'

// 将 axios 挂载 到 React 上的步骤
import axios from 'axios'

// 挂载 Axios 之前，全局配置一下 transformRequest 参数即可
// transformRequest 作用，就是在发起 Post 请求之前，对要发送给服务器的数据，做一层包装转换
axios.defaults.transformRequest = [function (data, headers) { // function 中的 data 就是要发送给服务器的数据
  // 在这里，我们要想办法，把 data 从 对象  { name: zs, age: 22 } ，转成 查询字符串   name=zs&age=22

  const arr = []
  for (let key in data) {
    arr.push(key + '=' + data[key])
  }

  // console.log(arr.join('&'))

  return arr.join('&')
}]

// 设置 全局的 baseURL
axios.defaults.baseURL = 'http://39.106.32.91:3000'

// 将 axios 挂载 到 父类的 原型上；
React.Component.prototype.$http = axios


// 思考：在 这个 globalConfig 文件中，有必要向外暴露 成员嘛？