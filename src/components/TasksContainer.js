import React, { Component } from 'react';
import '../css/TasksContainer.css';
import AddTask from './addTask';
import MyProfile from './myProfile';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ToDoContainer from './ToDoContainer';
import CompletedTasksContainer from './CompletedTasksContainer';
import { connect } from 'react-redux';
import { ToDoAll,TasksApi,profileAction} from '../actions';

class TasksContainer extends Component {
  componentWillMount() {
    var path=this.props.history.location.pathname;
    this.props.ToDoAll();
    if (path === "/dashboard/CompletedTasks") {
      this.props.TasksApi("Completed");
      } else if (path === "/dashboard/RescheduledTasks") {
      this.props.TasksApi("Rescheduled");
      }
    this.props.profileAction();
  }
  render() {
    return (
      <div className=" DontEditThisClass Tasklists1">
        <Route
          exact
          path={this.props.match.url + '/'}
          component={ToDoContainer}
        />
        <Route
          exact
          path={this.props.match.url + '/Todo'}
          component={ToDoContainer}
        />
        <Route
          exact
          path={this.props.match.url + '/AddTask'}
          component={AddTask}
        />
        <Route
          exact
          path={this.props.match.url + '/CompletedTasks'}
          component={CompletedTasksContainer}
        />
        <Route
          exact
          path={this.props.match.url + '/RescheduledTasks'}
          component={CompletedTasksContainer}
        />
        <Route
          exact
          path={this.props.match.url + '/Profile'}
          component={MyProfile}
        />
        <Route
          exact
          path={this.props.match.url + '/Profile/EditProfile'}
          component={MyProfile}
        />
      </div>
    );
  }
}
const myStateToProps = state => {
  return {
    SideMenuData: state.SideMenuReducer,
    token: state.allTasks.accessToken
  };
};

export default withRouter(
  connect(
    myStateToProps,
    { ToDoAll,TasksApi,profileAction}
  )(TasksContainer)
);
