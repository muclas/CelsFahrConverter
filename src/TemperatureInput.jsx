import React from 'react';

const scaleNames = {
  c: 'celsius',
  f: 'fahrenheit',
}

export default class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        Enter input in {scaleNames[this.props.scale]}:
        <input type="text" onChange={this.handleChange} value={this.props.temperature} />
      </fieldset>
    );
  }
}