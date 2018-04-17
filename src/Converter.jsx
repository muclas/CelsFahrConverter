import React from 'react';
import TemperatureInput from './TemperatureInput';

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { celsius: '', fahrenheit: '' };
    this.celsiusChanged = this.celsiusChanged.bind(this);
    this.fahrenheitChanged = this.fahrenheitChanged.bind(this);
  }

  render() {
    return (
      <div>
        <TemperatureInput scale='c' temperature={this.state.celsius} onChange={this.celsiusChanged} />
        <TemperatureInput scale='f' temperature={this.state.fahrenheit} onChange={this.fahrenheitChanged} />
      </div>
    );
  }

  celsiusChanged(c) {
    const fahr = this.tryConvert(c, this.toFahrenheit);
    this.setState({ celsius: c, fahrenheit: fahr });
  }

  fahrenheitChanged(f) {
    const cels = this.tryConvert(f, this.toCelsius);
    this.setState({ fahrenheit: f, celsius: cels });
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
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
}