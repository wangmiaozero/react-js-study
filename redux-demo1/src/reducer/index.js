/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 
 * @Date: 2020-08-07 20:20:43
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-03-21 22:37:09
 */
// 定义初始化的值
const intState = {
  count:0
}
// reducer 接受action 然后进行逻辑处理
// 判断 发送过来的action 是不是我们需要的
// 如果是我们需要就return 一个新的state 
exports.reducer = ( state = intState,action ) =>{
  console.log('reducer:',action);
  switch (action.type) {
    case 'add_action':
      return {
        count:state.count+1
      }
  
    default:
      return state;
  }
};