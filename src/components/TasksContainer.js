import React, { Component } from 'react';
import Taskitem from "./Taskitem";
import HeadNav from "./HeadNav";
import '../css/dashboard.css';
import AddTask from './addTask';
import MyProfile from './myProfile';
import {withRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import CompletedTask from './completeTask';
import RescheduledTask from './rescheduledTask';



class TasksContainer extends Component {
    render() {
        return (
            <div className="Tasklists">
                {/* <HeadNav></HeadNav> */}
                {/* <Taskitem /> */}
                <Route exact path={this.props.match.url + '/'} component={HeadNav}/>
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