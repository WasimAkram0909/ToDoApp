import React, { Component } from 'react';
import '../css/sideMenu.css';
// import profilePic from '../assets/ProfilePicture.png';
import Logo from '../assets/SidemenuLogo .svg';
import Alltasks from '../assets/Alltasks.svg';
import CompletedTask from '../assets/CompletedTasks.svg';
import RescheduledTask from '../assets/Rescheduld_Tasks.svg';
import profile from '../assets/Profile.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ToDoAll, TasksApi, SortByAction, profileAction } from '../actions';
import GoogleAuth from './googleauth';
// import { SideMenuData } from '../reducers/SideMenu';
import $ from 'jquery';

class SideMenu extends Component {
  render() {
    
      $('.SideMenuLinks').click(function() {
        $('.SideMenuLinks').removeClass('active');
        $(this).addClass('active');
      });
    
    return (
      <React.Fragment>
        <div className="sideMenuContainer">
          <div className="logoContainer">
            <img src={Logo} alt="ToDoLogo"/>
          </div>
          <div className="linksContainer">
            <Link
      to={`/dashboard/Todo`}
      onClick={this.props.ToDoAll}
      className="SideMenuLink"> 
       <div className="SideMenuLinks " >
                <img className="linkLogo" src={Alltasks} />
                Todo
            </div>
            </Link>
            <Link
      to={`/dashboard/CompletedTasks`}
      onClick={() => this.props.TasksApi('Completed')}
      className="SideMenuLink">
              <div className="SideMenuLinks ">
                <img className="linkLogo" src={CompletedTask} />
                Completed Tasks
            </div> </Link>
            <Link
      to={`/dashboard/RescheduledTasks`}
      onClick={() => this.props.TasksApi('Rescheduled')}
      className="SideMenuLink">
              <div className="SideMenuLinks ">
                <img className="linkLogo" src={RescheduledTask} />
                Rescheduled Tasks
              </div>
            </Link>
            <Link
      to={`/dashboard/Profile`}
      onClick={() => this.props.profileAction()}
      className="SideMenuLink">
              <div className="SideMenuLinks ">
                <img className="linkLogo" src={profile} />
                Profile
              </div>
            </Link>
          </div>
          <GoogleAuth />
        </div>
      </React.Fragment>
      );
  }
}
const myStateToProps = state => {
  return {
    // isSignedIn: state.googleData.isSignedIn,
    token: state.allTasks.accessToken
  };
};

export default withRouter(
  connect(
    myStateToProps,
    {
      ToDoAll,
      SortByAction,
      profileAction,
      TasksApi
    }
  )(SideMenu)
);
