import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Welcome from './components/Welcome';
// import LoginPage from  './LoginPage';
import RouterComponent from './components/routerComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterComponent/>
          {/* <LoginPage/>
          <Welcome/>
          */}
      </div>
      );
  }
}

export default App;
