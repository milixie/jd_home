import React, { Component } from 'react';
import './scss/app.scss';

export default class Context extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render() {
    return (
      <div className="context-page">
        {this.props.cur === 'shop' && <div className="shop">这是商品主页面</div>}
        {this.props.cur === 'shopDetail' && <div className="shop-detail">这是一件商品的详情页面</div>}
        {this.props.cur === 'shopEvaluate' && <div className="shop-evaluate">这是顾客的评论</div>}

      </div>
    );
  }
}