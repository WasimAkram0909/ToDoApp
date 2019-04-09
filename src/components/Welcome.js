import React, { Component } from 'react';
import '../css/welcome.css';
import profilePic from '../assets/ProfilePicture.png';
import circleTick from '../assets/Success.png';
import forwardArrow from '../assets/RightArrow.png';
import {Link } from 'react-router-dom';


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
          <Link to="/dashboard"><button className="button">
          <img src={forwardArrow} className="arrow"/>
          </button></Link>

      </div>
      </main>
    );
  }
}



export default Welcome;