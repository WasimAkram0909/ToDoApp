import React, { Component } from 'react';
import Taskitem from "./Taskitem";
import HeadNav from "./HeadNav";
import '../css/TasksContainer.css';
import AddTask from './addTask';
import MyProfile from './myProfile';
import {withRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import CompletedTask from './completeTask';
import RescheduledTask from './rescheduledTask';
import ToDoContainer from "./ToDoContainer";



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
                <Route exact path={this.props.match.url + '/Completed Tasks'} component={CompletedTask} />
                <Route exact path={this.props.match.url + '/Rescheduled Tasks'} component={RescheduledTask} />
                <Route exact path={this.props.match.url + '/Profile'} component={MyProfile} />
            </div>
        )
    }
}

export default withRouter(TasksContainer);