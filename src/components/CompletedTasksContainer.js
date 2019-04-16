import React, { Component } from 'react';
import '../css/TodoContianer.css';
import Taskitem from "./Taskitem";
import HeadNav from "./HeadNav";
// import  AllTasks from './AllTasks';
import AddTask from './addTask';
import MyProfile from './myProfile';
import {withRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import TaskComponent from "./TaskComponent";



class CompletedTasksContainer extends Component{
    render(){
        return(
            <div className="DontEditThisClass">
                <HeadNav title="Completed" showAdd={false}/>
                <TaskComponent/> 
            </div>
        )
    }
}

export default withRouter(CompletedTasksContainer);

