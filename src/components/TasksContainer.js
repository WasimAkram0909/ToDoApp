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

class TasksContainer extends Component {
    render() {
        return (
            <div className=" DontEditThisClass Tasklists">
                {/* <HeadNav></HeadNav> */}
                {/* <Taskitem /> */}
                {/* <Route exact path="/dashboard/Todo" component={Todo} */}
                <Route exact path={this.props.match.url + '/'} component={ToDoContainer}/>
                <Route exact path={this.props.match.url + '/Todo'} component={ToDoContainer}/>

                {/* <Route exact path={this.props.match.url + '/'} component={HeadNav}/> */}
                <Route exact path='/dashboard/AddTask' component={AddTask}/>
                <Route exact path={this.props.match.url + '/CompletedTasks'} component={CompletedTasksContainer} />
                <Route exact path={this.props.match.url + '/RescheduledTasks'} component={CompletedTasksContainer} />
                <Route exact path={this.props.match.url + '/Profile'} component={MyProfile} />
            </div>
        )
    }
}

export default withRouter(TasksContainer);