import React, { Component } from 'react';
import '../css/dashboard.css';
import SideMenu from "./sideMenu";
import AllTasks from './AllTasks'

class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <SideMenu className="sideMenu"/>
                {/* <div className="Tasklists">
                    asdf */}
                    <AllTasks/>
                {/* </div>  */}
            </div>
        )
    }
}

export default Dashboard;