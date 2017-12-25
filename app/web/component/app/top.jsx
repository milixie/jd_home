import React, { Component } from 'react';
import './scss/app.scss';

export default class Top extends Component {
  componentDidMount() {
  }

  switchTab(item) {
    this.props.switchContext(item);
  }

  render() {
    return <div className="top-page">
      <ul className="switch">
        <li className="sub" onClick={this.switchTab.bind(this, 'shop')}>商品</li>
        <li className="sub" onClick={this.switchTab.bind(this, 'shopDetail')}>商品详情</li>
        <li className="sub" onClick={this.switchTab.bind(this, 'shopEvaluate')}>商品评价</li>
      </ul>
    </div>;
  }
}