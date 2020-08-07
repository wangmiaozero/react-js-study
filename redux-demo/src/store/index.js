/*
 * @Description: redux
 * @Version: 1.0
 * @Autor: 
 * @Date: 2020-08-07 16:36:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-07 17:28:29
 */
import { createStore } from 'redux';
// 导入好自己创建reducer 并且构建store
import { reducer } from '../reducer'
const store = createStore(reducer);
export default store;