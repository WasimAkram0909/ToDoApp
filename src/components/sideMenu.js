import React, { Component } from 'react';
import '../css/sideMenu.css';
import profilePic from '../assets/ProfilePicture.png';
import Logo from '../assets/SidemenuLogo .svg';
import Alltasks from '../assets/Alltasks.svg';
import CompletedTask from '../assets/CompletedTasks.svg';
import RescheduledTask from '../assets/RescheduleTasks.svg';
import profile from '../assets/Profile.svg';
import Logout from '../assets/Logout.svg';
import {BrowserRouter as Router,Link, NavLink} from "react-router-dom";

class SideMenu extends Component{
    render(){
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
                           <Link className="SideMenuLink">Todo</Link>
                        </div>
                        <div className="SideMenuLinks">
                            <img className="linkLogo" src={CompletedTask}/>
                            <Link className="SideMenuLink">Completed Tasks</Link>
                        </div>
                        <div className="SideMenuLinks">
                            <img className="linkLogo" src={RescheduledTask}/>
                            <Link className="SideMenuLink">Rescheduled Tasks</Link>
                        </div>
                        <div className="SideMenuLinks">
                            <img className="linkLogo" src={profile}/>
                            <div className="SideMenuLink">Profile</div>
                        </div>
                    </div>
                    <div className="SideMenuLinks logout active">
                        <img className="linkLogo" src={Logout}/>
                        <div className="SideMenuLink">Log Out</div>
                    </div>
                    
                </div>
                </Router>
                {/* <div className="Tasklists">
asdf
                </div> */}
            </React.Fragment>
        )
    }
}


export default SideMenu;