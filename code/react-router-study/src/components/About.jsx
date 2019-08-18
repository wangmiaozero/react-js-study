import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
//导入需要的的子组件
import Tab1 from '@/components/tabs/Tab1'
import Tab2 from '@/components/tabs/Tab2'

export default class About extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return <div>
      <h1>About</h1>
      <button onClick={() => this.goBack()}>后退</button>
      <Link to="/about/tab1">tab1</Link>&nbsp;
      <Link to="/about/tab2">tab2</Link>
      <Route exact path="/about" render={()=><Redirect to="/about/tab1" />}></Route>
      <Route path="/about/tab1"component={Tab1} />
      <Route path="/about/tab2"component={Tab2} />
    </div>
  }
  goBack = () =>{
    // this.props.history.go(-1)
    this.props.history.goBack()
  }
}