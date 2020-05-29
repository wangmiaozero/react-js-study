/*
 * @Description: Home
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-29 19:31:11
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-29 20:12:46
 */ 
import React, { useState,useEffect } from 'react';
function Home() {
  const [ count1, setCount1 ] = useState(0);
  useEffect(()=>{
    console.log('进入了Home')
    return ()=>{
      console.log('离开了Home')
    }
    // 第二个参数 为空时 当前组件销毁时才会触发return 
    // 第二个参数 不为空时 根据数组中的触发 才会return
    // 不传参数时会 每次点击都会触发 进入和离开
  },[])
  return ( <div>
    <p>{count1}</p>
    <button onClick={()=>{setCount1(count1+1)}}>增加</button>
    <a href="https://www.wangmiaozero.cn">博客</a>
  </div> );
}
 
export default Home;