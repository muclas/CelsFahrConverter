import React from 'react';
import { render } from 'react-dom';
import Converter from './Converter';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Converter />
  </div>
);

render(<App />, document.getElementById('root'));

