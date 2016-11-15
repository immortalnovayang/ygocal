import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import CalculatorComponent from './CalculatorComponent';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
      
        <CalculatorComponent />
      </MuiThemeProvider>

    );
  }
}

export default App;
