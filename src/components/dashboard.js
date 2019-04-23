import React, { Component } from 'react';
import '../css/dashboard.css';
import SideMenu from "./sideMenu";
import Taskitem from "./Taskitem";
import HeadNav from "./HeadNav";
// import  AllTasks from './AllTasks';
import AddTask from './addTask';
import MyProfile from './myProfile';
// import {withRouter} from 'react-router-dom';
// import {Route} from 'react-router-dom';
import CompletedTasksContainer from "./CompletedTasksContainer";
import ToDoContainer from "./ToDoContainer";

// import CompletedTask from './completeTask';
// import RescheduledTask from './rescheduledTask';

import TasksContainer from "./TasksContainer";
class Dashboard extends Component{
    
    render(){
        // console.log(this.props);
        return(
            <div className="container ">
                <SideMenu className="sideMenu"/>
                <TasksContainer/>
            </div>
        )
    }
}

export default Dashboard;