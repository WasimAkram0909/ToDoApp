import React, { Component } from 'react';
import '../css/TodoContianer.css';
import HeadNav from "./HeadNav";
import {withRouter} from 'react-router-dom';
import TaskComponent from "./TaskComponent";
import {  TasksApi } from '../actions';
import {connect} from "react-redux";

const SideMenuData = [
    {
        name:"Todo",
        image:require("../assets/Alltasks.svg"),
        path:"Todo"
    },
    {
        name:"Completed Tasks",
        image:require("../assets/CompletedTasks.svg"),
        path:"CompletedTasks"
    },
    {
        name:"Rescheduled Tasks",
        image:require("../assets/Rescheduld_Tasks.svg"),
        path:"RescheduledTasks"
    },
    {
        name:"Profile",
        image:require("../assets/Profile.svg"),
        path:"Profile"
    }
]
class CompletedTasksContainer extends Component{
    render(){
        return(
            <div className="DontEditThisClass">
                {
                    this.props.match.url==="/dashboard/CompletedTasks" ? 
                    <HeadNav  title={SideMenuData[1].name} showSort={true} />
                    :<HeadNav  title={SideMenuData[2].name} showSort={true} />
                }
                <TaskComponent path1={this.props.match.url}   /> 
            </div>
        )
    }
}
const myStateToProps = state => {
    return {
      SideMenuData: state.SideMenuReducer,
      token: state.allTasks.accessToken
    };
  };

export default withRouter(connect(myStateToProps,{TasksApi})(CompletedTasksContainer));

