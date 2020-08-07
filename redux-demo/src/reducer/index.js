/*
 * @Description: reducer函数(处理action发送过来的值)
 * @Version: 1.0
 * @Autor: 
 * @Date: 2020-08-07 15:43:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-07 17:05:04
 */
/* 初始化 */
const initState = {
  value:'默认值'
}
// state = initState 如果外面传值了,就用外面的值,如果没有传值就使用默认值
const reducer = (state = initState,action) =>{
  console.log('reducer:',state,action);
  // 如果action 发送过来的是 send_type
  switch (action.type) {
    case 'send_type':
        return Object.assign({},state,action);
    default:
      return state;
  }
}

module.exports = {
  reducer
}