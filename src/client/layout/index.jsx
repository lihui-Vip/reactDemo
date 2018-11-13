import React, { Component } from 'react';
import { browserHistory } from 'react-router'


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
        You {text} this. Click to toggle.
      </div>
    );
  }
}


export default LikeButton;
