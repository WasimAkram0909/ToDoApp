import React, { Component } from 'react';
import '../css/welcome.css';
import profilePic from '../assets/ProfilePicture.png';
import circleTick from '../assets/Success.png';
import forwardArrow from '../assets/RightArrow.png';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={profilePic} className="profilePic"/>
          <p className="welcome">Welcome </p>
          
            <img src={circleTick} className="circleTick"/>
            <p>You have Successfully Created ToDo Account </p>
        
          <button className="button"><img src={forwardArrow} className="arrow"/></button>

      </div>
    );
  }
}



export default App;