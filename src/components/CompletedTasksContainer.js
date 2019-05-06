import React, { Component } from 'react';
import '../css/TodoContianer.css';
import HeadNav from "./HeadNav";
import {withRouter} from 'react-router-dom';
import TaskComponent from "./TaskComponent";
import {SideMenuData} from "../reducers/SideMenu";
import {  TasksApi } from '../actions';
import {connect} from "react-redux";


class CompletedTasksContainer extends Component{
    componentWillMount() {
        this.getDataFromApi();
      }
      getDataFromApi() {
        this.props.TasksApi();
      }
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
      isSignedIn: state.googleData.isSignedIn,
      SideMenuData: state.SideMenuReducer,
      token: state.allTasks.accessToken
    };
  };

export default withRouter(connect(myStateToProps,{TasksApi})(CompletedTasksContainer));

