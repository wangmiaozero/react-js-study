// 1. 通过 打印输出，得到 Promise 就是一个构造函数； 因此，可以new 出一个实例对象；
// 2. 在 Promise.prototype 上，有一个 .then() 所以，每个 Promise 实例，都可以访问 .then() 方法
//  2.1 这个 .then 的作用是什么？就是 为 Promise 实例，指定【成功】或【失败】之后做什么事情的；

// 3. Promise 就表示一个异步操作；
// 4. const p = new Promise()  这一行代码，表示 我们创建了一个【形式上】的异步操作！！！
// 5. const p = new Promise(function(){ }) 者就是创建了一个【具体的异步操作】； 在这个 function 中，可以指定具体的异步操作流程；


// 注意： 如果new 了一个 Promise 实例，则这个Promise所代表的异步操作，会立即被调用和执行；
/* new Promise(function () {
  console.log('ok')
}) */

// 需求：想让 Promise 在需要的时候才执行；
// 解决方案：把 new Promise 的过程，包裹到一个 方法中；这样，只要不调用方法，则 promise 所代表的异步操作就不会执行；
// function mytest() {
//   new Promise(function () {
//     console.log('okok')
//   })
// }

// mytest()

const fs = require('fs')

// 需求： 把 读文件的方法，用 Promise 的形式来实现一遍；
function getContentByPromise(path) {
  return new Promise(function (resolve, reject) { // 在 创建具体 异步操作的时候，可以 在 function 的形参中，接收外界通过  .then 预先指定的 成功  和 失败的 回调函数；
    fs.readFile(path, 'utf-8', (err, dataStr) => {
      // if (err) return console.log('失败！')
      // console.log(dataStr)
      if (err) return reject(err) // 如果失败了，则调用失败的回调，并把失败的结果，传递给调用者
      resolve(dataStr)// 如果成功了，则调用成功的回调，并把成功的结果，传递给调用者
    })
  })
}

// const p = getContentByPromise('./files/23.txt')

// .then 是 【预先】 为 Promise 异步操作，指定成功或失败回调的；
// p.then(成功的回调, 失败的回调)
// p.then(function (data) {
//   console.log('成功了：' + data)
// }, function (err) {
//   console.log('失败了：' + err.message)
// })


// 通过  .then 必须指定 成功的回调，但是 失败的回调，可以省略；
// ★★★★★★注意：下面紧挨着的，是错误的演示，250岁以下的孩子，千万不要模仿★★★★★★★★
/* getContentByPromise('./files/1.txt').then(function (data) {
  console.log(data)

  getContentByPromise('./files/2.txt').then(function (data) {
    console.log(data)

    getContentByPromise('./files/3.txt').then(function (data) {
      console.log(data)
    })
  })
}) */


getContentByPromise('./files/1.txt')
  .then(res => { // 读取文件1
    console.log(res)
    return getContentByPromise('./files/22.txt')
  })
  .then(res => { // 读取文件2
    console.log(res)

    return getContentByPromise('./files/3.txt')
  })
  .then(res => { // 读取文件3
    console.log(res)
  })
  .catch(err => {
    console.log('报错了：' + err.message)
  })


// f1().then().then().then()







// 总结1：如果 要自己创建一个 按需执行的异步操作，那么，需要 把 new Promise 的过程，包裹到一个 function 中
// 总结2：通过 .then 预先 指定的 成功 和 失败 回调，是在 new Promise(function(resolve, reject){}) 时候，function 的形参列表中，来进行接收的；
// 总结3：如果异步操作 成功， 则需要调用 resolve(成功的数据); 如果失败，则需要调用 reject(失败的结果)