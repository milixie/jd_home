import React, { Component } from 'react';

import './scss/app.scss';


export default class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.changeTemperature = this.changeTemperature.bind(this);
  }
  componentDidMount() {
  }

  render() {
    const { unit, temperature } = this.props;
    return (
      <div className="temperature">
        {unit === 'c' ? <p>请输入摄氏温度</p>: <p>请输入华氏温度</p>}
        <input type="text" value={temperature} onChange={this.props.changeTemperature}/>
      </div>
    );
  }
}