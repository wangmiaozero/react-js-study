import React from 'react'

// 按需导入 布局相关的组件
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

// 导入 路由相关的 组件
import { HashRouter, Route, Link, Redirect } from 'react-router-dom'
//  HashRouter 全局只使用一次；而且，最佳实践，就是把它 用在 App 根组件中，当作最外层那个容器

// 导入 路由相关的组件页面
import HomeContainer from '@/components/home/HomeContainer'
import MovieContainer from '@/components/movie/MovieContainer'
import AboutContainer from '@/components/about/AboutContainer'

// 导入 根组件需要的 样式表
import cssobj from '@/css/app.scss'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <HashRouter>
      <Layout className="layout" style={{ height: '100%' }}>
        {/* 头部区域 */}
        <Header>
          <div className={cssobj.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[location.hash.split('/')[1] || 'home']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
            <Menu.Item key="movie"><Link to="/movie">电影</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
          </Menu>
        </Header>

        {/* 中间内容区域 */}
        <Content style={{ padding: '0', backgroundColor: 'white', flex: 1 }}>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={HomeContainer} />
          <Route path="/movie" component={MovieContainer} />
          <Route path="/about" component={AboutContainer} />
        </Content>

        {/* 尾部区域 */}
        <Footer style={{ textAlign: 'center' }}>
          传智播客 ©{new Date().getFullYear()} 黑马程序员
        </Footer>
      </Layout>
    </HashRouter>
  }
}