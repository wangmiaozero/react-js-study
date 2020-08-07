/*
 * @Description: store
 * @Version: 1.0
 * @Autor: 
 * @Date: 2020-08-07 20:22:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-07 20:32:29
 */
import { createStore } from 'redux';
// 导入自己reducer处理函数
import { reducer } from '../reducer';
// 构造 store
export default createStore(reducer);