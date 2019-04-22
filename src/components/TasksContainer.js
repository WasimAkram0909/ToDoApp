import React, { Component } from 'react';
import Taskitem from "./Taskitem";
import HeadNav from "./HeadNav";
import '../css/TasksContainer.css';
import AddTask from './addTask';
import MyProfile from './myProfile';
import {withRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import ToDoContainer from "./ToDoContainer";
import CompletedTasksContainer from "./CompletedTasksContainer";
import Dashboard from "./dashboard";
// import TasksContainer from "./"

class TasksContainer extends Component {
    render() {
        return (
            <div className=" DontEditThisClass Tasklists1">

                <Route exact path={this.props.match.url + '/'} component={ToDoContainer}/>
                 <Route exact path={this.props.match.url + '/Todo'} component={ToDoContainer}/>

                 <Route exact path={this.props.match.url + '/AddTask'} component={AddTask}/> 
                <Route exact path={this.props.match.url + '/CompletedTasks'} component={CompletedTasksContainer} />
                <Route exact path={this.props.match.url + '/RescheduledTasks'} component={CompletedTasksContainer} />
                <Route exact path={this.props.match.url + '/Profile'} component={MyProfile} />
                <Route exact path={this.props.match.url + '/Profile/EditProfile'} component={MyProfile} />
                

            </div>
        )
    }
}

export default withRouter(TasksContainer);