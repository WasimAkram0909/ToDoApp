

import React, { Component } from 'react';
import '../css/Taskitem.css';
import { connect } from 'react-redux';
import StatusNoneIcon from '../assets/StatusNone.svg';
import {
  DisplayActions,
  CompletedTaskAction,
  RescheduleTask,
  DeleteTask,
  HideActionButtons
} from '../actions';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar';
import Toast from './Toast';
var rescheduleTo;

class Taskitem extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showComponent: false,
    showToast: false,
    date: new Date(),
  };
  MyFunction = () => {
    var tempDate = new Date();
    var month = tempDate.toLocaleString('en-us', { month: 'long' }) + ' ' + tempDate.getDate();
    return (
    month
    );
    }
rescheduleDate = ()=>{
  var tempDate = new Date();
  var month = tempDate.toLocaleString('en-us', { month: 'long' }) + ' ' + tempDate.getDate();
  return (
  month
  );
}

  rescheduleTask = date => {
    // console.log(date.getDate());
 
    this.props.HideActionButtons();
    // rescheduleTo= this.rescheduleDate();
    // console.log(rescheduleTo);
    this.setState({ 
      showToast: true  ,
      showComponent:false,
      date
    });
    // return rescheduleTo;
  };
  completeTask = (tasks) => {
    var date1=this.MyFunction();
    this.props.CompletedTaskAction({tasks,date1});
    this.props.HideActionButtons();
    this.setState({ 
      showToast: true,
     });
  };
  deleteTask = (tasks,index) => {
    // console.log(i);
    this.props.DeleteTask({tasks,index});
    // this.props.HideActionButtons();
    this.setState({ 
      showToast: true,
      
     });
  };
  _onButtonClick = () => {
    this.props.RescheduleTask();
    this.setState({
      showComponent: true
    });
  };

  render() {
    console.log(this.props.cards);
   const {date}=this.state.date;

    return (
      <React.Fragment>
        {this.props.cards.map((tasks, index) => {
          // console.log(i);
          return (
           
            <div className="ItemContainer">
             {/* <div>{this.state.date}</div> */}
              <div className="StatusNoneIcon">
                <img src={StatusNoneIcon} onClick={this.props.DisplayActions} />
              </div>
              <p className="taskData">{tasks.Task}</p>
              {this.props.Status ? (
                <div className="editTaskButtons">
                  <img
                    src={this.props.data.completedTaskData.image}
                    onClick={()=>this.completeTask(tasks)}
                  />
                  <img
                    src={this.props.data.rescheduleData.image}
                    onClick={()=>this._onButtonClick(tasks)}
                  />
                  <img
                    src={this.props.data.deleteTask.image}
                    onClick={()=>this.deleteTask(tasks,index)}
                  />
                </div>
              ) : null}
              {this.state.showToast ? <Toast /> : null}
            </div>
          );
        })}
         {this.state.showComponent ? (
                    <Calendar
                      className="calendar"
                      onChange={this.rescheduleTask}
                      value={date}
                    />
                  ) : null}
      </React.Fragment>
    );
  }
}
const myStateToProps = state => {
  console.log(state.allTasks);
  console.log(state.allTasks.Task);
  return {
    data: state.allTasks,
    cards: state.allTasks.Task,
    Status: state.allTasks.Status
  };
};

export default connect(
  myStateToProps,
  { DisplayActions, CompletedTaskAction, RescheduleTask, DeleteTask,HideActionButtons }
)(Taskitem);
