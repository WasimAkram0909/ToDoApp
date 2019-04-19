import React, { Component } from 'react';
import '../css/Taskitem.css';
import { connect } from 'react-redux';
import StatusNoneIcon from '../assets/StatusNone.svg';
import {
  DisplayActions,
  TasksApi,
  CompletedTaskAction,
  RescheduleTask,
  DeleteTask,
} from '../actions';
import Calendar from 'react-calendar';
import Toast from './Toast';
// import {Link} from "react-router-dom";
import Completed from "../assets/Completed.svg";
import Reschedule from "../assets/Reschedule.svg";
import Delete from "../assets/Delete.svg";

let taskDate="";

class Taskitem extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showComponent: false,
    showToast: false,
    showBtns: false,
    date: '',
    rescheduleTask: '',
    selectedId: null,
    toastMsg: null,
    toastImage: null
  };
  MyFunction = () => {
    var tempDate = new Date();
    var month =
      tempDate.toLocaleString('en-us', {
        month: 'long'
      }) +
      ' ' +
      tempDate.getDate();
    return month;
  };

  rescheduleTask = selectdate => {
    let day = selectdate.getDate();
    let monthNum = selectdate.getMonth();
    let monthArr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    let month = monthArr[monthNum];
    let date = day + ' ' + month;
    this.props.RescheduleTask({
      tasks: this.state.rescheduleTask,
      status: 'RescheduledTasks',
      date
    });
    this.setState({
      showComponent: false,
      showBtns: false,
      showToast: true,
      toastMsg: ' You have successfully rescheduled the task',
      toastImage: require('../assets/Toast Reschedule.png')
    });
  };
  
  completeTask = tasks => {
    var date = this.MyFunction();
   const status=1;    
   this.props.TasksApi({tasks,status});
    // this.props.CompletedTaskAction({ tasks, date });
    this.setState({
      showBtns: false,
      showToast: true,
      toastMsg: 'You have successfully completed the task',
      toastImage: require('../assets/Toast completed.png')
    });
  };
  deleteTask = (tasks, index) => {
    this.props.DeleteTask({ tasks, index });
    this.setState({
      showBtns: false,
      showToast: true,
      toastMsg: 'You have successfully deleted the task',
      toastImage: require('../assets/Toast Delete.png')
    });
  };
  _onButtonClick = tasks => {
    this.setState({
      showComponent: true,
      rescheduleTask: tasks
    });
  };
  DisplayActionsBtns = tasks => {
    {
      this.setState({
        showBtns: true,
        selectedId: tasks.parentId,
        showToast: false
      });
    }
  };

  render() {
    const { date } = this.state.date;

    return (
      <React.Fragment>      
        {this.props.cards.map((tasks, index) => {
          if(tasks.createDate!= undefined){
            var d = tasks.createDate;
            var mthNum = d.slice(5,7);
            var dateNum = d.slice(8,10);
            var mthNum1 = mthNum.slice(0,1);
            var mthNum2 = mthNum.slice(1,2);
            let monthArr=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];     if(mthNum1==0){
              mthNum= monthArr[mthNum2];
            }else{
              mthNum = monthArr["1"+ mthNum2];
            }
            taskDate = mthNum +" "+dateNum;
          }
          
          
          // tasks.status="CompletedTasks";
          return (
           <main>
                <p>{taskDate}</p>
            <div className="ItemContainer">
          
              <div className="StatusNoneIcon">
                <img
                  src={StatusNoneIcon}
                  onClick={() => this.DisplayActionsBtns(tasks)}
                />
              </div>
              <p className="taskData">{tasks.taskName}</p>

              {this.state.showBtns &&
              this.state.selectedId === tasks.parentId ? (
                <div className="editTaskButtons">
                  <img
                    src={Completed}
                    onClick={() => this.completeTask(tasks)}
                  />
                  <img
                    src={Reschedule}
                    onClick={() => this._onButtonClick(tasks)}
                  />
                  <img
                    src={Delete}
                    onClick={() => this.deleteTask(tasks, index)}
                  />
                </div>
                // </Link>
              ) : null}
            </div>
            </main>
          );
        })}
        {this.state.showToast ? <Toast showToast={this.state} /> : null}

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
  return {
    data: state.allTasks,
    cards: state.allTasks.Task
  };
};

export default connect(
  myStateToProps,
  { 
    TasksApi,
    CompletedTaskAction,
     RescheduleTask, DeleteTask,
  })(Taskitem);
