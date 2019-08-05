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


// 使用 普通的 .then 来调用 Promise
/* getContentByPromise('./files/1.txt')
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
  }) */





// 使用 ES7 中的 async 和 await 来简化 Promise 的调用
// 1. async 是用来修饰 function 的; 被 async 修饰的 function 就是一个异步 方法了；
// 2. await 只能用在 被 async 修饰的方法中；
// 3. await 只能用来修饰 Promise 异步操作；


// // 1. 使用 async 修饰普通 方法
// async function show() { }
// // 2. 使用 async 修饰 箭头函数
// var a = async () => { }

// 这是一个异步方法
async function getContent() {

  console.log('正在执行异步方法')

  const result1 = await getContentByPromise('./files/1.txt')
  console.log(result1)
  const result2 = await getContentByPromise('./files/2.txt')
  console.log(result2)
  const result3 = await getContentByPromise('./files/3.txt')
  console.log(result3)

  console.log('异步方法执行完了')
}

console.log('start')
getContent() // 注意：在 调用 被 async 修饰的方法的时候，在执行的一瞬间，主程序会进入到 异步方法内，在 异步方法内部，在遇到 第一个 await 之前，所有代码都是被主程序执行的；当遇到第一个 await，则 之后的代码，都是被队列执行的；
console.log('end')