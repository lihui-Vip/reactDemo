import React, { Component } from 'react';
import { render } from 'react-dom';

import Hello from './hello'

//一个组件类都是由extend Component 创建的，提供了render方法以及其他可选的生命周期函数、组件相关的事件。
class LikeButton extends Component {
  constructor(props) {
    super(props);//在ES6中，在子类的constructor中必须先调用super才能引用this
    this.state = { liked: false };
  }

  handleClick(e) {
    console.log(e);
    this.setState({ liked: !this.state.liked });
  }

  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <div onClick={this.handleClick.bind(this)}>
        <Hello childName='Hello'></Hello>
        You {text} this. Click to toggle.
      </div>
    );
  }
}

render(
  <LikeButton />,
  document.getElementById('container')
);
