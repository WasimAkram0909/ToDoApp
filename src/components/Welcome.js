import React, { Component } from 'react';
import '../css/welcome.css';
import circleTick from '../assets/Success.png';
import forwardArrow from '../assets/RightArrow.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Welcome extends Component {
  render() {
    console.log('dashboard');
    return this.props.profileDetails.map(profileData => {
      return (
        <main className="App">
          <div className="AppDiv">
            <img src={profileData.image} className="profilePic" />
            <p className="welcome">Welcome {profileData.name}</p>
            <div className="messageBox">
              <img src={circleTick} className="circleTick" />
              <p>You have Successfully Created ToDo Account </p>
            </div>
            <Link to="/welcome">
              {' '}
              <button className="button" onClick={() => this.click()}>
                <img src={forwardArrow} className="arrow" />
              </button>
            </Link>
          </div>
        </main>
      );
    });
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    profileDetails: state.profileData
  };
};

export default connect(mapStateToProps)(Welcome);
