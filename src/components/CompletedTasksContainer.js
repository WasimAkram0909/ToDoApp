import React, { Component } from 'react';
import '../css/TodoContianer.css';
import HeadNav from "./HeadNav";
import {withRouter} from 'react-router-dom';
import TaskComponent from "./TaskComponent";
import {SideMenuData} from "../reducers/SideMenu";



class CompletedTasksContainer extends Component{
    render(){
        return(
            <div className="DontEditThisClass">
                {
                    this.props.match.url=="/dashboard/CompletedTasks" ? 
                    <HeadNav  title={SideMenuData[1].name} showSort={true} />
                    :<HeadNav  title={SideMenuData[2].name} showSort={true} />
                }
                <TaskComponent path1={this.props.match.url}   /> 
            </div>
        )
    }
}

export default withRouter(CompletedTasksContainer);

