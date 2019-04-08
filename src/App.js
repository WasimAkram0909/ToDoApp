import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import LoginPage from  './LoginPage';
class App extends Component {
  render() {
    return (
      <div className="App">
          <LoginPage/>
          <Welcome/>
      </div>
      );
  }
}

export default App;
