/*
 * @Description: 解决子组件重复执行问题 useMemo
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-06-01 20:02:54
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-03 09:49:03
 */ 
import React, { useState,useMemo } from 'react';
 
/* 
  "react": "^16.13.1" 版本必须大于16.8.1 才可以使用hooks

  函数组件中不能拥有自己的状态（state）。在hooks之前函数组件是无状态的，都是通过props来获取父组件的状态，但是hooks提供了useState来维护函数组件内部的状态。

  函数组件中不能监听组件的生命周期。useEffect聚合了多个生命周期函数。

  class组件中生命周期较为复杂（在15版本到16版本的变化大）。

  class组件逻辑难以复用（HOC，render props）。

*/

// useMemo和useCallback主要用于减少组件的更新次数、优化组件性能的。
// useMemo接收一个回调函数以及依赖项，只有依赖项变化时才会重新执行回调函数。
// useCallback接收一个回调函数以及依赖项，并且返回该回调函数的memorize版本，只有在依赖项重新变化时才会重新新的memorize版本。

// 语法
// const memoDate = useMemo(() => data, [//dep...])
// const memoCb = useCallback(() => {//...}, [//dep...])


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