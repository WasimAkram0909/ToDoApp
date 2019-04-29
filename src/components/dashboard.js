import React, { Component } from 'react';
import '../css/dashboard.css';
import SideMenu from "./sideMenu";
import TasksContainer from "./TasksContainer";
class Dashboard extends Component{
    
    render(){
        return(
            <div className="container ">
                <SideMenu className="sideMenu"/>
                <TasksContainer/>
            </div>
        )
    }
}

export default Dashboard;