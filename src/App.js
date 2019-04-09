import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouterComponent from './components/routerComponent';
import Welcome from './components/Welcome';
import LoginPage from  './components/LoginPage';
import Dashboard from "./components/dashboard";

class App extends Component {
  render() {
    return (
      <div>
      <RouterComponent/>
          {/* <LoginPage/> */}
          
          {/* <Welcome/> */}
          {/* <Dashboard/> */}
         
      </div>
      );
  }
}

export default App;
