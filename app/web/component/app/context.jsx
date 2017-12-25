import React, { Component } from 'react';
import './scss/app.scss';

export default class Context extends Component {
  componentDidMount() {
  }

  render() {
    return <div className="context-page">
      <div className="shop">这是商品主页面</div>
      <div className="shop-detail">这是一件商品的详情页面</div>
      <div className="shop-evaluate">这是顾客的评论</div>
    </div>;
  }
}