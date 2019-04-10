import React, { Component } from 'react';
import '../css/sideMenu.css';
import profilePic from '../assets/ProfilePicture.png';
import Logo from '../assets/SidemenuLogo .svg';
import Alltasks from '../assets/Alltasks.svg';
import CompletedTask from '../assets/CompletedTasks.svg';
import RescheduledTask from '../assets/RescheduleTasks.svg';
import profile from '../assets/Profile.svg';
import Logout from '../assets/Logout.svg';
import {BrowserRouter as Router,Route,Link, NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ToDoAll} from '../actions';
import Dashboard from './dashboard';
import GoogleAuth from "./googleauth";

class SideMenu extends Component{
   
    render(){
        // console.log(this.props.AllTasks);
        return(
            <React.Fragment>
                <Router>
                <div className="sideMenuContainer">
                    <div className="logoContainer">
                        <img src={Logo}/>
                    </div>
                    <div className="linksContainer ">
                        <div className="SideMenuLinks ">
                           <img className="linkLogo" src={Alltasks}/>
                           <Link to="/dashboard/Todo"  onClick={this.props.ToDoAll} className="SideMenuLink">Todo</Link>
                        </div>
                        <div className="SideMenuLinks">
                            <img className="linkLogo" src={CompletedTask}/>
                            <Link to="/dashboard/CompletedTasks" className="SideMenuLink">Completed Tasks</Link>
                        </div>
                        <div className="SideMenuLinks">
                            <img className="linkLogo" src={RescheduledTask}/>
                            <Link  to="/dashboard/RescheduledTasks" className="SideMenuLink">Rescheduled Tasks</Link>
                        </div>
                        <div className="SideMenuLinks">
                            <img className="linkLogo" src={profile}/>
                            <Link to="/dashboard/Profile" className="SideMenuLink">Profile</Link>
                        </div>
                    </div>
                    {/* <div className="SideMenuLinks logout active"> */}

                    <GoogleAuth />
                    {/* </div> */}
                    
                </div>
                <Route path="/dashboard/:id" Component={Dashboard}/>
                </Router>
            </React.Fragment>
        )
    }
}
const myStateToProps = (state) => {
    console.log(state);
  return { isSignedIn: state.googleData.isSignedIn };
};

export default withRouter(connect(myStateToProps)(SideMenu));
