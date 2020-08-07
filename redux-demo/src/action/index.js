/*
 * @Description: 构造函数
 * @Version: 1.0
 * @Autor: 
 * @Date: 2020-08-07 15:33:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-07 15:38:09
 */
const sendAction =()=>{
  return {
    type:'send_type',
    value:'这是一个action'
  }
}
module.exports = {
  sendAction
}