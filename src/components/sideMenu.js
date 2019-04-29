import React, { Component } from 'react';
import '../css/sideMenu.css';
import profilePic from '../assets/ProfilePicture.png';
import Logo from '../assets/SidemenuLogo .svg';
import Alltasks from '../assets/Alltasks.svg';
import CompletedTask from '../assets/CompletedTasks.svg';
import RescheduledTask from '../assets/Rescheduld_Tasks.svg';
// /home/wtt090/Wasim-test/ToDoApp/src/assets/Reschedule.svg
// /home/wtt090/Wasim-test/ToDoApp/src/assets/Rescheduld_Tasks.svg
import profile from '../assets/Profile.svg';
import Logout from '../assets/Logout.svg';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ToDoAll, TasksApi, SortByAction, profileAction } from '../actions';
import Dashboard from './dashboard';
import GoogleAuth from "./googleauth";
import {SideMenuData} from "../reducers/SideMenu";
import $ from 'jquery'; 




class SideMenu extends Component {
  // actionFunction=()=>{
  //     var token=this.props.token
  // this.props.TasksApi(token);
  // }
  CompleteFunction=()=>{
    console.log("Tasks");
    // this.props.SortByAction();
    this.props.TasksApi("Completed");
}
RescheduleFunction=()=>{
    console.log("Tasks");
    // this.props.SortByAction();
    this.props.TasksApi("Rescheduled");
}
  render() {
      console.log(this.props.match);
      
    // var item = document.querySelector(".SideMenuLinks");
    {

      $(".SideMenuLinks").click(function() {
        $(".SideMenuLinks").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
      });
    }
    // var actionsArr = [ToDoAll,CompletedTaskAction,RescheduleTask,profileAction]
    return (
      <React.Fragment>
                { /* <Router> */ }
                <div className="sideMenuContainer">

                    <div className="logoContainer">
                        <img src={Logo} />
                    </div>
                    <div className="linksContainer ">
                        <div className="SideMenuLinks ">
                            <img className="linkLogo" src={Alltasks} />
                            <Link to={`/dashboard/Todo`} onClick={() => this.props.ToDoAll} className="SideMenuLink">Todo</Link>
                        </div><div className="SideMenuLinks ">
                            <img className="linkLogo" src={CompletedTask} />
                            <Link to={`/dashboard/CompletedTasks`} onClick={this.CompleteFunction()} className="SideMenuLink">Completed Tasks</Link>
                        </div><div className="SideMenuLinks ">
                            <img className="linkLogo" src={RescheduledTask} />
                            <Link to={`/dashboard/RescheduledTasks`} onClick={()=>this.RescheduleFunction()} className="SideMenuLink">Rescheduled Tasks</Link>
                        </div><div className="SideMenuLinks ">
                            <img className="linkLogo" src={profile} />
                            <Link to={`/dashboard/Profile`} onClick={() => this.props.profileAction(this.props.token)} className="SideMenuLink">Profile</Link>
                        </div>

                    </div>

                    <GoogleAuth />

                </div>
            </React.Fragment>
    )
  }
}
const myStateToProps = (state) => {
  console.log(state);
  return {
    isSignedIn: state.googleData.isSignedIn,
    token: state.allTasks.accessToken,

  };
};

export default withRouter(connect(myStateToProps, {
  ToDoAll,
  SortByAction,
  profileAction,
  TasksApi
})(SideMenu));
