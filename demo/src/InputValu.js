/*
 * @Description: 组件化,抽离
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-10 21:33:35
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-17 20:53:54
 */
import React,{Component,Fragment} from 'react'
import './InputValu.css'
import LiItem from './LiItem'
// Fragment 减少组件div嵌套 比如:解决flex组件抽离布局问题
export default class InputValu extends Component{
  constructor(props){
    super(props)//调用上级的方法
    this.state = {
      inputValue:'hello word',
      list:['八重樱','卡莲']
    }
  }
  render(){
    return(
      <Fragment>
        <div>
          {/* bind 改变this指向 */}
          {/*  
              这种写法不需要用bind修饰this指向(这是最标准的写法)
             onClick={()=>this.addList()} 
              这种写法需要用bind修饰this指向
             onClick={this.deleteItem.bind(this,index)}
          */}
          {/* index.js:1 Warning: Invalid DOM property `for`. Did you mean `htmlFor`? */}
          <label htmlFor="input">人物:</label>
          <input id="input" ref={(input)=>{this.input=input}} value={this.state.inputValue} onChange={this.inputChange.bind(this)} /> 
          <button onClick={()=>this.addList()}>增加</button>
        </div>
        <ul ref={(ul)=>{this.ul=ul}}>
          {/* 
          dangerouslySetInnerHTML可以解析输入的html
          例如: <h1 style="color:red;">Can only set one of `children` or `props.dangerouslySetInnerHTML`</h1>
          Can only set one of `children` or `props.dangerouslySetInnerHTML`. 
          dangerouslySetInnerHTML标签下不能有内容
          */}
    {/* { this.state.list.map((item,index)=>{return(<li className="mylis" key={index} dangerouslySetInnerHTML={{__html:item}}><button onClick={this.deleteItem.bind(this,index)}>删除</button></li>)})} */}
    { this.state.list.map((item,index)=>{return(
      // content 是自定义的
      <LiItem content={item} key={item+index} index={index} deleteItem={this.deleteItem.bind(this)}  list={this.state.list}/>
  /*   <li className="mylis" key={index} dangerouslySetInnerHTML={{__html:item}} onClick={this.deleteItem.bind(this,index)}></li> */
    )})}
        </ul>
      </Fragment>
    )
  }
  // 事件
  inputChange(e){
    console.log(e)
    console.log(e.target.value,'e.target.value')
    console.log(this)
    // 错误双向绑定
    // this.state.inputValue = e.target.value
    // 调用react setState方法
   /*  this.setState({
      inputValue:e.target.value
    }) */
    // 使用react 中的ref
  
    console.log(this.input,'this.input.value')
    console.log(this.input.value,'this.input.value')
    this.setState({
      inputValue:this.input.value
    })
  }
  // 增加列表
  addList(){
    console.log(this.ul.querySelectorAll('li').length,'虚拟dom  异步问题')
    if(this.state.inputValue!=''){
      this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue:''
      },()=>{
        console.log(  this.ul.querySelectorAll('li').length,'回调函数解决')
      })
    }else{
      alert('this.state.inputValue不能为空')
    }
    console.log(this.state.list)
  }
  deleteItem(row){
    console.log(row)
    // 错误写法
   /*  this.setState({
      list:this.state.list.splice(row,1)
    }) */

    let list = this.state.list
    list.splice(row,1)
    this.setState({
      list:list
    })
   
  }
}