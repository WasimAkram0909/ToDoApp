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
import {SideMenuData} from "../reducers/SideMenu";



class CompletedTasksContainer extends Component{
    render(){

        return(
            <div className="DontEditThisClass">
                {
                    this.props.match.url=="/dashboard/CompletedTasks" ? 
                    <HeadNav  title={SideMenuData[1].name} showSort={true}/>
                    :<HeadNav  title={SideMenuData[2].name} showSort={true}/>
                }
                {/* <HeadNav  title={SideMenuData[1].name} /> */}
                {/* {console.log(SideMenuData[1].name)} */}
                {console.log(this.props.match.url)}
                <TaskComponent path1={this.props.match.url}/> 
            </div>
        )
    }
}

export default withRouter(CompletedTasksContainer);

