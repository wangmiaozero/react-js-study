/*
 * @Description: ref
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-06-28 10:50:00
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-28 11:47:20
 */ 
import React, { use, useRef,useState,useEffect} from 'react';

function Examle8(){
 const inputEl = useRef(null);
 const onButtonClick = ()=>{
  inputEl.current.value = 'Hello World'
  console.log(inputEl)
  console.log(inputEl.current.value)
 }
 const [text,setText] = useState('World')
 const textRef = useRef();
 useEffect(()=>{
  textRef.current = text;
  console.log('textRef',textRef.current)
 })
 return (
   <>
     <input ref={inputEl} type="text" />
     <button onClick={onButtonClick}>btn</button>
     <br/>
     <input value={text} onChange={(e)=>{setText(e.target.value);console.log(e.target.value)}} />
   </>
 )
}
 
export default Examle8;