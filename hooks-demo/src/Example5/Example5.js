/*
 * @Description: 状态共享
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-06-01 15:16:24
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-01 19:42:01
 */ 
import React from 'react';
import ShowArea from './ShowArea'
import Buttons from './Buttons';
import { Color,ColorContext } from './color'
function Example5(){
 // console.log(Color,ColorContext)
  return(
    <div>
        <Color>
          <ShowArea/>
           <Buttons/>
        </Color>
    </div>
  )
}
export default Example5