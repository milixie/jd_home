import React, { Component } from 'react';
import './scss/app.scss';

export default class Top extends Component {
  constructor(props) {
    super(props);
    // this.state = props.cur
  }

  componentDidMount() {
  }

  switchTab(item) {
    console.log(item);
    this.setState({
      cur: item
    }, this.props.switchTabChange(item))
  }

  render() {
    return <div className="top-page">
      <ul className="switch">
        <li className={this.props.cur === 'shop' ? 'active sub': 'sub'} onClick={this.switchTab.bind(this, 'shop')}>商品</li>
        <li className={this.props.cur === 'shopDetail' ? 'active sub': 'sub'} onClick={this.switchTab.bind(this, 'shopDetail')}>商品详情</li>
        <li className={this.props.cur === 'shopEvaluate' ? 'active sub': 'sub'} onClick={this.switchTab.bind(this, 'shopEvaluate')}>商品评价</li>
      </ul>
    </div>;
  }
}