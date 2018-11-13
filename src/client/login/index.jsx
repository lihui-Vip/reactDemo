import React, { Component } from 'react';

class Login extends Component {
  handleSubmit = (e) => {
    console.log(this.props);
    this.props.history.push('/');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="userName" />
        <input type="text" placeholder="repo" />
        <button type="submit">Go</button>
      </form>
    );
  }
}


export default Login;
