// 需求： 自己封装一个读文件的方法  调用者 在调用方法的时候，提供一个要读取的路径；
// 在方法中，读文件，并把 读取成功的 内容，返回给调用者；

const fs = require('fs')


// 封装读文件的方法
// 方法封装的原则：【不要替调用者决定如何处理结果,而是应该把方法调用的结果，返回给调用者，让调用者决定如何处理数据】
// 方法封装的原则：【错误的结果，也需要返回给调用者去处理】
function getContentByPath(path, callback) {
  // 注意： fs.readFile 是一个异步方法
  fs.readFile(path, 'utf-8', (err, dataStr) => {
    if (err) return callback(err)
    callback(null, dataStr)
  })
}

// 注意：第二个 参数是 callback 回调；是调用者，预先指定的一个操作流程；
/* getContentByPath('./files/1.txt', function (err, data) { // 规定死了：callback 中，第一个参数永远是 失败的结果；第二个 参数，才是成功的结果
  console.log('最终的内容是：' + data)
}) */


// 需求： 依次读取 文件 1.txt    2.txt    3.txt

// 回调函数的嵌套【回调地狱】
getContentByPath('./files/1.txt', function (err, data) {
  console.log('最终的内容是：' + data)

  getContentByPath('./files/2.txt', function (err, data) {
    console.log('最终的内容是：' + data)

    getContentByPath('./files/3.txt', function (err, data) {
      console.log('最终的内容是：' + data)
    })
  })
})

// 为了解决  回调地狱 的问题 ，有推出了 Promise 的概念；
// Promise 目标，就是为了解决回调地狱； Promise 并不会帮我们减少代码量；