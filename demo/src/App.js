/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-09 21:28:35
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-10 22:30:14
 */
import React,{Component} from 'react';
import logo from './logo.svg';
import InputValu from './InputValu';
// Fragment 减少组件div嵌套 比如:解决flex组件抽离布局问题
class App extends Component{
  render(){
    return (
      <div className="App">
        <InputValu></InputValu>
        <div ><img src={logo} /></div>
      </div>
    )
     /*  面试题 */
   /*  var child_1 = React.createElement('li',null,'hello word')
    var child_2 = React.createElement('li',null,'你好 世界')
    var root = React.createElement('ul',{className:'my-list'},child_1,child_2) */
  }
}

 

export default App;
