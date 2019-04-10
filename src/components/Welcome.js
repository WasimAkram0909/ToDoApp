import React, { Component } from 'react';
import '../css/welcome.css';
import profilePic from '../assets/ProfilePicture.png';
import circleTick from '../assets/Success.png';
import forwardArrow from '../assets/RightArrow.png';
import {Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";
import {connect } from "react-redux";

class Welcome extends Component {
  click=()=>{
   this.props.history.push("/dashboard");
  }
  render() {
    console.log(this.props);
    return (
        <main className="App">
      <div className="AppDiv">
          <img src={profilePic} className="profilePic"/>
          <p className="welcome">Welcome Roma</p>
          <div className="messageBox">
            <img src={circleTick} className="circleTick"/>
            <p>You have Successfully Created ToDo Account </p>
          </div>
         <button className="button" onClick={this.click}>
          <img src={forwardArrow} className="arrow"/>
          </button>
      </div>
      </main>
    );
  }
}
const mapState = state => {
  console.log(state);
return { profileDetails: state.profileData};
}


export default withRouter(connect(mapState)(Welcome));