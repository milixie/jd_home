import React, { Component } from 'react';
import Top from '../../component/app/top.jsx';
import Context from '../../component/app/context.jsx';

export default class App extends Component {
  componentDidMount() {
  }

  switchContext(item) {
    console.log(item);
  }

  render() {
    return <div className="page">
      <Top switchContext={this.switchContext}></Top>
      <Context ></Context>
    </div>;
  }
}