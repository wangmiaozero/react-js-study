/*
 * @Description: 解决子组件重复执行问题
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-06-01 20:02:54
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-01 20:59:16
 */ 
import React, { useState,useMemo } from 'react';
 
function Example6(params) {
  const [heimao,setHeimao] = useState('黑猫(五更琉璃)欢迎你!')
  const [chutian,setChutian] = useState('雏田(日向雏田)欢迎你!')
  return(
    <div>
      <button onClick={()=>{setHeimao(new Date().getTime()+'向你使用了毒舌嘲讽技能!')}}>黑猫</button>
      <button onClick={()=>{setChutian(new Date().getTime()+'向你使用了回天技能!')}}>雏田</button>
      <ChildComponent name={heimao}>{chutian}</ChildComponent>
    </div>
  )
}

// 子组件
function ChildComponent({name,children}) {
  function changeHeimao(){
    console.log(name+',她来了')
    return name+',她来了'
  }
  // 第一个参数 fn useMemo
  const actionHeimao = useMemo(()=>{changeHeimao(name)},[name]) 
 // const actionHeimao = changeHeimao(name)
  return(
    <>
        <div>{actionHeimao}</div>
        <div>{children}</div>
    </>
  )
}

export default Example6;