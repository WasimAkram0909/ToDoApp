import React, { Component } from 'react';
import '../css/welcome.css';
import circleTick from '../assets/Success.png';
import forwardArrow from '../assets/RightArrow.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Welcome extends Component {
  render() {
    return this.props.profileDetails.map(profileData => {
      return (
        <main className="App">
          <div className="AppDiv">
            <img src={profileData.image} className="profilePic" alt="profileImage" />
            <p className="welcome">Welcome {profileData.name}</p>
            <div className="messageBox">
              <img src={circleTick} className="circleTick" alt="" />
              <p>You have Successfully Created ToDo Account </p>
            </div>
            <Link to="/dashboard">
              <button className="button">
                <img src={forwardArrow} className="arrow" alt="" />
              </button>
            </Link>
          </div>
        </main>
      );
    });
  }
}
const mapStateToProps = state => {
  return {
    profileDetails: state.profileData
  };
};

export default connect(mapStateToProps)(Welcome);
