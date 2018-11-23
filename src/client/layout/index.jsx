/**
 * 布局组件
 */
import React, { Component } from 'react';
import Loadable from 'react-loadable';
// 路由
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Menu 导航菜单 Icon 图标
// import { Menu, Icon } from 'antd';
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';

// import HomePage from '../homePage'; // 首页
// import UserList from '../userList';
// import addUser from '../addUser';
// import bookList from '../bookList';
// import addBook from '../addBook';
import style from './css';
import Async from '$lib/utils/async';

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  }
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  }
  else {
    return null;
  }
};

const HomePage = Loadable({
  loader: () => import('../homePage'),
  loading: MyLoadingComponent
});
const UserList = Loadable({
  loader: () => import('../userList'),
  loading: MyLoadingComponent
});
const addUser = Loadable({
  loader: () => import('../addUser'),
  loading: MyLoadingComponent
});
const bookList = Loadable({
  loader: () => import('../bookList'),
  loading: MyLoadingComponent
});
const addBook = Loadable({
  loader: () => import('../addBook'),
  loading: MyLoadingComponent
});

const routes = [
  { path: '/book/list', component: bookList },
  { path: '/book/add', component: addBook },
  { path: '/user/list', component: UserList },
  { path: '/user/add', component: addUser },
  { path: '/', component: HomePage }
]

// 左侧菜单栏
const SubMenu = Menu.SubMenu;

class HomeLayout extends Component {
  componentDidMount() {
    style.use();
  }
  componentWillUnmount() {
    style.unuse();
  }
  render() {
    return (
      <div>
        <header className="header">
          <Link to="/">Home</Link>
        </header>

        <main className="main">
          <div className="menu">
            <Menu mode="inline" theme="dark" style={{ width: '240' }}>
              <SubMenu
                key="user"
                title={
                  <span>
                    <Icon type="user" />
                    <span>用户管理</span>
                  </span>
                }
              >
                <Menu.Item key="user-list">
                  <Link to="/user/list">用户列表</Link>
                </Menu.Item>
                <Menu.Item key="user-add">
                  <Link to="/user/add">添加用户</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="book"
                title={
                  <span>
                    <Icon type="book" />
                    <span>图书管理</span>
                  </span>
                }
              >
                <Menu.Item key="book-list">
                  <Link to="/book/list">图书列表</Link>
                </Menu.Item>
                <Menu.Item key="book-add">
                  <Link to="/book/add">添加图书</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className="content">
            <Router>
              <Switch>
                {
                  routes.map(route => (
                    <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                  ))
                }
              </Switch>
            </Router>
          </div>
        </main>
      </div>
    );
  }
}

export default HomeLayout;
