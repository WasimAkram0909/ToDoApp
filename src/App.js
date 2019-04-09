import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouterComponent from './components/routerComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterComponent/>
      </div>
      );
  }
}

export default App;
