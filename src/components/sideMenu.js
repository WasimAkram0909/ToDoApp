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
import { ToDoAll,RescheduleTaskAction,CompletedTaskAction,profileAction } from '../actions';
import Dashboard from './dashboard';
import GoogleAuth from "./googleauth";
import {SideMenuData} from "../reducers/SideMenu";


class SideMenu extends Component {

    render() {
        var actionsArr = [ToDoAll,CompletedTaskAction,RescheduleTaskAction,profileAction]
        return (
            <React.Fragment>
                {/* <Router> */}
                    <div className="sideMenuContainer">

                        <div className="logoContainer">
                            <img src={Logo} />
                        </div>
                        <div className="linksContainer ">
                            <div className="SideMenuLinks ">
                                <img className="linkLogo" src={Alltasks} />
                                <Link to={`/dashboard/Todo`} onClick={this.props.ToDoAll} className="SideMenuLink">Todo</Link>
                            </div><div className="SideMenuLinks ">
                                <img className="linkLogo" src={CompletedTask} />
                                <Link to={`/dashboard/CompletedTasks`} className="SideMenuLink">Completed Tasks</Link>
                            </div><div className="SideMenuLinks ">
                                <img className="linkLogo" src={RescheduledTask} />
                                <Link to={`/dashboard/RescheduledTasks`} className="SideMenuLink">Rescheduled Tasks</Link>
                            </div><div className="SideMenuLinks ">
                                <img className="linkLogo" src={profile} />
                                <Link to={`/dashboard/Profile`} onClick={this.props.profileAction}className="SideMenuLink">Profile</Link>
                            </div>

                        </div>

                        <GoogleAuth />

                    </div>
            </React.Fragment>
        )
    }
}
const myStateToProps = (state) => {
    // console.log(state);
    return {
        isSignedIn: state.googleData.isSignedIn,
        // SideMenuData: state.SideMenuReducer,
    };
};

export default withRouter(connect(myStateToProps,{ToDoAll})(SideMenu));
