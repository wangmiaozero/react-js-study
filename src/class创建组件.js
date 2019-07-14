//1.导入包
import React from "react"
import ReactDOM from "react-dom"
//import React,{Component} from 'react'
/* import '@/class-继承' */
// import '@/class-继承-公共方法'
//import '@/class实例方法和静态方法'

//class 关键字创建组件
class Movie extends React.Component{
  //构造器
  constructor(){
   //  由于Movie组件,继承了React.component 这个父类所以,自定义的构造器中 也必须加super 
    super()
    //只用调用了super() 以后才能使用this关键字
    // 这个 this.state = {} 就是相当于Vue中的data(){return{}}
    this.state = {
      msg:'我是class 创建的Movie'
    }
  }
  // render 函数的作用就是 渲染当前的组件对应的虚拟dom元素(字面意思)
  render(){
   // return null  表示占个位置
   // 在 class 关键字创建的组件中,如果想使用 外界传递过来的props参数,不需要接受,
   // 只需直接通过this.props.name 访问即可
   // 注意:!!! 不论是 class 还是普通function 创建的组件,他们props 都是只读的
   // 在class 创建的组件中,this.state 上的数据,都是可读可写
   // 下面我尝试修改msg值!!!!!!!!
   this.state.msg = 'msg被我修改了!'
   return <div>
     <h1>{this.state.msg}</h1>
     { /* 在class组件内部,this表示当前组件的实例对象 */ }
     这是Movie 组件--{this.props.name} --{this.props.age}
   </div>
  }
}

const user = {
  name:'jeck',
  age:22,
  gender:'男'
}
//展开运算符
ReactDOM.render( < div >
    233
    <Movie {...user}></Movie>
    </div>,document.querySelector("#app"))
    /* var o2 = {
      age: 22,
      address: '中国北京',
      phone: '139999'
    }

    var o1 = {
      name: 'zs',
      ...o2
    }

    console.log(o1) */