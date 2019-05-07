import React, { Component } from 'react';
import '../css/dashboard.css';
import SideMenu from "./sideMenu";
import TasksContainer from "./TasksContainer";
class Dashboard extends Component{
    
    render(){
        console.log(this.props.match.params);
        return(
            <div className="container ">
                <SideMenu className="sideMenu"/>
                <TasksContainer/>
            </div>
        )
    }
}

export default Dashboard;