import React, { Component } from 'react';
import '../css/sideMenu.css';
import profilePic from '../assets/ProfilePicture.png';
import Logo from '../assets/SidemenuLogo .svg';
import Alltasks from '../assets/Alltasks.svg';
import CompletedTask from '../assets/CompletedTasks.svg';
import RescheduledTask from '../assets/Reschedule.svg';
import profile from '../assets/Profile.svg';
import Logout from '../assets/Logout.svg';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ToDoAll } from '../actions';
import Dashboard from './dashboard';
import GoogleAuth from "./googleauth";
import {SideMenuData} from "../reducers/SideMenu";

class SideMenu extends Component {

    render() {
        // console.log('this is waSIM');
        // console.log(this.props.SideMenuData, "PROPS");
        // this.props.SideMenuData.map((item) => { console.log(item.image, item.name) });
        return (
            <React.Fragment>
                {/* <Router> */}
                    <div className="sideMenuContainer">

                        <div className="logoContainer">
                            <img src={Logo} />
                        </div>
                        <div className="linksContainer ">

                            {SideMenuData.map((item) => {
                                return (
                                    <div className="SideMenuLinks ">
                                        <img className="linkLogo" src={item.image} />
                                        <Link to={`/dashboard/${item.name}`} onClick={this.props.ToDoAll} className="SideMenuLink">{item.name}</Link>
                                    </div>)

                            })}

                        </div>

                        <GoogleAuth />

                    </div>
                    {/* <Route path="/dashboard/:id" Component={Dashboard} /> */}
                {/* </Router> */}
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

export default withRouter(connect(myStateToProps)(SideMenu));