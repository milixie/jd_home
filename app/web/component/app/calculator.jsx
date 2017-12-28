import React, { Component } from 'react';
import Temperature from './temperature.jsx';
// import temp from './../../framework/lib/temperature';
import './scss/app.scss';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: 'c',
      temperature: 21
    };
  }

  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="calculator">
        <Temperature unit='c' temperature={this.state.temperature} changeTemperature={e => this.setState({temperature: e.target.value})}></Temperature>
        <Temperature unit='f' temperature='12'></Temperature>
      </div>
    );
  }
}