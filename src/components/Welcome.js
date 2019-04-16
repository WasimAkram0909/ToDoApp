
import React, { Component } from 'react';
import '../css/welcome.css';
import circleTick from '../assets/Success.png';
import forwardArrow from '../assets/RightArrow.png';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Welcome extends Component {
  click = () => {
    this.props.history.push("/dashboard");
  }
  render() {
    return (
      this.props.profileDetails.map((profileData) => {
        // console.log(profileData.name);
        // console.log(profileData.image);
        return (
          <main className="App">
            <div className="AppDiv">
              <img src={profileData.image} className="profilePic" />
              <p className="welcome">Welcome {profileData.name}</p>
              <div className="messageBox">
                <img src={circleTick} className="circleTick" />
                <p>You have Successfully Created ToDo Account </p>
              </div>
              <button className="button" onClick={this.click}>
                <img src={forwardArrow} className="arrow" />
              </button>
            </div>
          </main>
        );
      }));
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    profileDetails: state.profileData
  };
}


export default withRouter(connect(mapStateToProps)(Welcome));