import React, { Component } from 'react';

// // 2. 使用function构造函数创建组件
// function Hello(props) {
//   return (
//     <div>
//       <div>这是Hello组件</div>
//       <h1>这是大大的H1标签，我大，我骄傲！！！</h1>
//       <h6>这是小小的h6标签，我小，我傲娇！！！</h6>
//     </div>
//   )
// }
// 3. 导出组件
export default class Hello extends Component {
  constructor(props) {
    super(props);//在ES6中，在子类的constructor中必须先调用super才能引用this
  }
  render() {
    return (
      <div>
        <div>这是{this.props.childName}组件</div>
        <h1>这是大大的H1标签，我大，我骄傲！！！</h1>
        <h6>这是小小的h6标签，我小，我傲娇！！！</h6>
      </div>
    );
  }
}
