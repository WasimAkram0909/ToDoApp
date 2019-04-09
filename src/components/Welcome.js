import React, { Component } from 'react';
import '../css/welcome.css';
import profilePic from '../assets/ProfilePicture.png';
import circleTick from '../assets/Success.png';
import forwardArrow from '../assets/RightArrow.png';

class Welcome extends Component {
  render() {
    return (
        <main className="App">
      <div className="AppDiv">
          <img src={profilePic} className="profilePic"/>
          <p className="welcome">Welcome </p>
          <div className="message">
            <img src={circleTick} className="circleTick"/>
            <p>You have Successfully Created ToDo Account </p>
          </div>
          <button className="button">
          <img src={forwardArrow} className="arrow"/>
          </button>

      </div>
      </main>
    );
  }
}



export default Welcome;