import React, { Component } from 'react';
import './App.css';
import RouterComponent from './components/routerComponent';
import Media from 'react-media';
import LoginPage from "./MobileVersion/LoginPage";


class App extends Component {
  render() {
    return (
      // <div>
      // <RouterComponent/>
      // </div>
      <Media query="(max-width: 414px)">
          {matches =>
            matches ? (
              <LoginPage></LoginPage>
            ) : (
              <div>
                 <RouterComponent/>
              </div>
            )
          }
        </Media>
      );
  }
}

export default App;
