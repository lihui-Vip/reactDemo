/**
 * 布局组件
 */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// 路由
import { Link } from 'react-router-dom';
// Menu 导航菜单 Icon 图标
import { Menu, Icon } from 'antd';

import HomePage from '../homePage'; // 首页
import UserList from '../userList';
import addUser from '../addUser';
import bookList from '../bookList';
import addBook from '../addBook';
import './css';

// 左侧菜单栏
const SubMenu = Menu.SubMenu;

class HomeLayout extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Link to="/">Home</Link>
        </header>

        <main className="main">
          <div className="menu">
            <Menu mode="inline" theme="dark" style={{ width: '240' }}>
              <SubMenu key="user" title={<span><Icon type="user" /><span>用户管理</span></span>}>
                <Menu.Item key="user-list">
                  <Link to="/user/list">用户列表</Link>
                </Menu.Item>
                <Menu.Item key="user-add">
                  <Link to="/user/add">添加用户</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="book" title={<span><Icon type="book" /><span>图书管理</span></span>}>
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
              <Route path="/book/list" component={bookList} />
              <Route path="/book/add" component={addBook} />
              <Route path="/user/list" component={UserList} />
              <Route path="/user/add" component={addUser} />
              <Route path="/" component={HomePage} />
              </Switch>
            </Router>
          </div>
        </main>
      </div>
    );
  }
}

export default HomeLayout;
