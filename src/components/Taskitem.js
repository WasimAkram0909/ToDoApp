import React, { Component } from 'react';
import '../css/Taskitem.css';
import { connect } from 'react-redux';
import StatusNoneIcon from '../assets/StatusNone.svg';
import {
  DisplayActions,
  DeleteTask,
  UpdateTask
} from '../actions';
import Calendar from 'react-calendar';
import Toast from './Toast';
import Completed from '../assets/Completed.svg';
import overDue from '../assets/overdue.svg';
import Reschedule from '../assets/Reschedule.svg';
import Delete from '../assets/Delete.svg';
import moment from 'moment';
import { object } from 'prop-types';

let taskDate = '';
class Taskitem extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showComponent: false,
    showToast: false,
    showBtns: false,
    date: '',
    tasks: '',
    selectedId: null,
    toastMsg: null,
    toastImage: null,
    overDueTasksArr: []
  };

  rescheduleTask = selectdate => {
    let date = moment(selectdate).format('DD-MM-YYYY');
    console.log(this.state.tasks);
    this.state.tasks.status="Rescheduled";
    var token=this.props.token;
    this.state.tasks.createDate=date;
    console.log(this.state.tasks.createDate);
    this.props.UpdateTask({ tasks: this.state.tasks,token });
    this.setState({
      showComponent: false,
      showBtns: false,
      showToast: true,
      toastMsg: ' You have successfully rescheduled the task',
      toastImage: require('../assets/Toast Reschedule.png')
  });}
  completeTask = (tasks) => {
    let date = moment(date).format("DD-MM-YYYY");
   tasks.status="Completed";
   tasks.createDate=date;
   var token=this.props.token
  this.props.UpdateTask({tasks,token});
    this.setState({
      showBtns: false,
      showToast: true,
      toastMsg: 'You have successfully completed the task',
      toastImage: require('../assets/Toast completed.png')
    });
  };
  deleteTask = (taskId, index) => {
    var token=this.props.token
    this.props.DeleteTask({ taskId, index,token });
    this.setState({
      showBtns: false,
      showToast: true,
      toastMsg: 'You have successfully deleted the task',
      toastImage: require('../assets/Toast Delete.png')
    });
  };
  _onButtonClick = (tasks, index) => {
    this.setState({
      showComponent: true,
      tasks: tasks
    });
  };
  DisplayActionsBtns = tasks => {
    {
      this.setState({
        showBtns: true,
        selectedId: tasks.taskId,
        showToast: false,
        showComponent:false
      });
    }
  };
  static getDerivedStateFromProps(props, state) {
    let tempArr = [];
    // this.overDueTasksArr = [];
    props.cards.map((tasks, index) => {
      if(tasks != undefined){
        // console.log(tasks);
        var d = tasks.createDate;
        taskDate = moment(d).format('MMM D YYYY');
        var currentDate = moment().format('MMM D YYYY');
        if (moment(taskDate).isBefore(currentDate)) {
          tempArr.push(tasks);
        }
      }
    })
    let copyState = {...state, overDueTasksArr: tempArr}
    return copyState;
  }
  render() {
    const {date} = this.state.date;
    var result = this.props.cards.reduce(function(r, a) {
      r[a.createDate] = r[a.createDate] || [];
      // console.log(a.createDate)
      r[a.createDate].push(a);
      return r;
      
    }, Object.create(null));

    var groupedTaskItems = Object.entries(result);
    var newGroupedTaskItems= groupedTaskItems.sort(function(a,b){
      // console.log(a);
       var c = new Date(a[0]);
      //  console.log(c);
       var d = new Date(b[0]);
      //  console.log(d)
       return c-d;
       });
      //  console.log(abc);
    var resultOverDue = this.state.overDueTasksArr.reduce(function(r, a) {
      r[a.createDate] = r[a.createDate] || [];
      r[a.createDate].push(a);
      return r;
    }, Object.create(null)
    )
    var groupedOverDueItems = Object.entries(resultOverDue);
    var newGroupedOverDueItems= groupedOverDueItems.sort(function(a,b){
       var c = new Date(a[0]);
       var d = new Date();
       return c-d;
       });
    return (
      <React.Fragment>
        {newGroupedTaskItems.map((TaskDetails, i) => {
      var d = TaskDetails[0];
      var taskDate = moment(d).format("MMM D");
      var currentDate = moment().format("MMM D")
      if (!moment(taskDate).isBefore(currentDate)) {
        return (
          <main>
              <p className="dataClass">{moment(TaskDetails[0]).format("MMM D")}</p>
                {TaskDetails[1].map((Tasksdata, index) => {
            return (              
            <div className="ItemContainer" key ={Tasksdata.taskId}>
                      <div className="StatusNoneIcon">
                        <img
                src={StatusNoneIcon}
                onClick={() => this.DisplayActionsBtns(Tasksdata)}
                />
                      </div>
                      <p className="taskData">{Tasksdata.taskName}</p>
                      {this.state.showBtns &&
                this.state.selectedId === Tasksdata.taskId ? (
                  <div className="editTaskButtons">
                            <img
                  src={Completed}
                  onClick={() => this.completeTask(Tasksdata)}
                  />
                            <img
                  src={Reschedule}
                  onClick={() => this._onButtonClick(Tasksdata)}
                  />
                            <img
                src={Delete}
                onClick={() => this.deleteTask(Tasksdata, index)}
                />

                          </div>
                ) : null}

<div className="calenderClass">
{this.state.showComponent ? (
  <Calendar
  className="calendar"
  onChange={this.rescheduleTask}
  value={date}
  />
  ) : null}
  </div>
           </div>)})}
            </main>
          )
        }
      })}
      {this.state.showToast ? <Toast showToast={this.state} /> : null}
{ newGroupedOverDueItems.map((TaskDetails, i) => {
  var d = TaskDetails[0];
  taskDate = moment(d).format("MMM D");
  var currentDate = moment().format("MMM D")
    return (
      <main>
        <p className="dataClass">{moment(d).format("MMM D")}</p>
        { /* <div className="ItemContainer"> */ }
          {TaskDetails[1].map((Tasksdata, index) => {
        return (            
            <div className="ItemContainer" key ={Tasksdata.taskId}>
                <div className="StatusNoneIcon">
                  <img
          src={overDue}
          onClick={() => this.DisplayActionsBtns(Tasksdata)}
          />
                </div>
                <p className="taskData">{Tasksdata.taskName}</p>
                {this.state.showBtns &&
          this.state.selectedId === Tasksdata.taskId ? (
            <div className="editTaskButtons">
                      <img
            src={Completed}
            onClick={() => this.completeTask(Tasksdata)}
            />
                      <img
            src={Reschedule}
            onClick={() => this._onButtonClick(Tasksdata)}
            />
                      <img
            src={Delete}
            onClick={() => this.deleteTask(Tasksdata.taskId, index)}
            />
                    </div>
            ) : null}
     </div>)
      })}
      </main>)
})}
{this.state.showComponent ? (
        <Calendar
        className="calendar"
        onChange={this.rescheduleTask}
        value={date}
        />
        ) : null}
      </React.Fragment>
    )
  }
}
const myStateToProps = state => {

  let filteredData = state.allTasks.Task;

  console.log(state.allTasks.sortDate);
  console.log(filteredData);
  
  if (state.allTasks.sortDate !== undefined && state.allTasks.sortDate !==null){
    filteredData=   filteredData.filter(key => {
        let date=key.createDate.slice(0,4)+"-"+ key.createDate.slice(5,7)+"-"+ key.createDate.slice(8,10);
        console.log(date);
        if (state.allTasks.sortDate === date) {
          console.log(key);
          return key;
        }
      })
  }


 
  return {
    data: state.allTasks,
    cards: filteredData,
    token: state.allTasks.accessToken,
  };
};
export default connect(
  myStateToProps,
  {
    DeleteTask,
     UpdateTask
  })(Taskitem);
