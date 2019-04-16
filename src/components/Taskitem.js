import React, { Component } from 'react';
import '../css/Taskitem.css';
import { connect } from 'react-redux';
import StatusNoneIcon from '../assets/StatusNone.svg';
import RescheduleIcon from '../assets/Reschedule.svg';
import CompletedIcon from '../assets/Completed.svg';
import DeleteIcon from '../assets/Delete.svg';
import {
  DisplayActions,
  completedTaskAction,
  RescheduleTask,
  DeleteTask
} from '../actions';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar';
import TaskComponent from "./TaskComponent";
import Toast from './Toast';


class Taskitem extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showComponent: false,
    // showCompleteTask:false,
    showToast: false,
    date: new Date()
  };
  MyFunction = () => {
    var tempDate = new Date();
    var month = tempDate.toLocaleString('en-us', { month: 'long' }) + ' ' + tempDate.getDate();
    return (
    month
    );
    }
  onCalendarClick = date => {
   console.log(date);
  //  const modifiedDate=date;
  //  const month =  modifiedDate.getDate();
  //  console.log(month);
    this.setState({ date,
      showComponent: false,});
      console.log(this.state);
      // return month;
  };
  completeFun = (key,tasks) => {
    console.log(key,tasks);
    var date1=this.MyFunction();
    console.log(date1);
    this.props.completedTaskAction({tasks,date1});
    this.setState({ 
      // showCompleteTask:true,
      showToast: true,
     });
  };
  deleteFun = () => {
    this.props.DeleteTask();
    this.setState({ showToast: true });
  };
  rescheduleFun = (data) => {
    var date1=this.onCalendarClick();
    console.log(date1);
    this.props.RescheduleTask({data,date1});
    this.setState({
      showComponent: true,
      showToast: true
    });
  };

  render() {
    console.log(this.props.cards);

    return (
      <React.Fragment>
        {this.props.cards.map((tasks, i) => {
          return (
            <div className="ItemContainer">
              <div className="StatusNoneIcon">
                <img src={StatusNoneIcon} onClick={this.props.DisplayActions} />
              </div>
              <p className="taskData">{tasks.Task}</p>
              {this.props.Status ? (
                <div className="editTaskButtons">
                  <img
                    src={this.props.data.completedTaskData.image}
                    onClick={()=>this.completeFun(i,tasks)}
                  />
                  <img
                    src={this.props.data.rescheduleData.image}
                    onClick={()=>this.rescheduleFun(tasks)}
                  />
                  
                  <img
                    src={this.props.data.deleteTask.image}
                    onClick={this.deleteFun}
                  />
                </div>
              ) : null}
              
            </div>
          );
        })}
        {this.state.showComponent ? (
                    <Calendar
                      className="calender"
                      onChange={this.onCalendarClick}
                      value={this.state.date}
                    />
                  ) : null}
        {this.state.showToast ? <Toast /> : null}
      </React.Fragment>
    );
  }
}
const myStateToProps = state => {
  return {
    data: state.allTasks,
    cards: state.allTasks.Task,
    Status: state.allTasks.Status
  };
};

export default connect(
  myStateToProps,
  { DisplayActions, completedTaskAction, RescheduleTask, DeleteTask }
)(Taskitem);
