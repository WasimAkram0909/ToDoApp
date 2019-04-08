import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
       <h3>wasim akram</h3>
       <p>To do APP</p>
       <h1>daily logs</h1>
       <Welcome/>
        </header>
      </div>
      );
  }
}

export default App;
