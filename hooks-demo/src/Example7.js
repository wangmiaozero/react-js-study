/*
 * @Description: 解决子组件重复执行问题 useMemo
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-06-01 20:02:54
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-03 10:53:04
 */ 
import React, { useState,useMemo,useCallback } from 'react';
 
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


/* function Example7() {
  const [name, setName] = useState('cc')
  const [age, setAge] = useState(22)

  const addAge = () => {
    setAge(age + 1)
  }

  return (
    <>
      <p>父组件</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>age: {age}</p>
      <p>-------------------------</p>
      <Child addAge={addAge} />
    </>
  )
}

function Child(props){
  const { addAge } = props
  console.log('child component update')
  return (
    <>
      <p>子组件</p>
      <button onClick={addAge}>click</button>
    </>
  )
} */


//--------------------------------------------
// 使用useCallback优化

function Example7() {
  const [name, setName] = useState('cc')
  const [age, setAge] = useState(22)

  const addAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  return (
    <>
      <p>父组件</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>age: {age}</p>
      <p>-------------------------</p>
      <Child addAge={addAge} />
    </>
  )
}

function Child(props){
  const { addAge } = props
  console.log('child component update')
  return (
    <>
      <p>子组件</p>
      <button onClick={addAge}>click</button>
    </>
  )
}


export default Example7;