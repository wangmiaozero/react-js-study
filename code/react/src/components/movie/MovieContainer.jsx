import React from 'react'

// 导入 Antd 组件
import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

// 导入 路由组件
import {Route, Link, Redirect, Switch} from 'react-router-dom'

// 导入 路由对应的组件
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'

export default class MovieContainer extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    // console.log(this.state.selectedKey)
    return <Layout style={{ height: '100%' }}>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[location.hash.split('/')[2]||'in_theaters']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="in_theaters"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
          <Menu.Item key="coming_soon"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
          <Menu.Item key="top250"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ paddingLeft: '1px' }}>
        <Content style={{ background: '#fff', padding: 10, margin: 0, minHeight: 280 }}>
          {/* Switch 作用：就是 从上到下，一次匹配，如果有一个成功了，就不会继续往下匹配了 */}
          <Switch>
            <Route exact path="/movie" render={()=><Redirect to="/movie/in_theaters/1"/>}/>
            {/* /movie/detail/20435622   */}
            {/* 路由的特殊性：参数越多，特殊性越低  */}
            {/* 如果路由规则被 Switch 包裹了，则特殊性，应该从高到低 */}
            <Route exact path="/movie/detail/:id" component={MovieDetail}/>
            <Route exact path="/movie/:type/:page" component={MovieList}/>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  }
}