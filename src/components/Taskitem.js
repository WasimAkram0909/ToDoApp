import React, { Component } from 'react';
import '../css/Taskitem.css';
import { connect } from 'react-redux';
import StatusNoneIcon from '../assets/StatusNone.svg';
import { DisplayActions, TasksApi, CompletedTaskAction, RescheduleTask, DeleteTask, } from '../actions';
import Calendar from 'react-calendar';
import Toast from './Toast';
// import {Link} from "react-router-dom";
import Completed from "../assets/Completed.svg";
import overDue from "../assets/overdue.svg";
import Reschedule from "../assets/Reschedule.svg";
import Delete from "../assets/Delete.svg";
import moment from "moment";



let taskDate = "";
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
    overDueTasksArr :[],
    
  };
  MyFunction = () => {
    var tempDate = new Date();
    var month = tempDate.toLocaleString('en-us', {
      month: 'long'
    }) +
    ' ' +
    tempDate.getDate();
    return month;
  };

  rescheduleTask = selectdate => {
    let date = moment(selectdate).format("YYYY-MM-DD");
    this.props.RescheduleTask({tasks:this.state.tasks,date});
    this.setState({
      showComponent: false,
      showBtns: false,
      showToast: true,
      toastMsg: ' You have successfully rescheduled the task',
      toastImage: require('../assets/Toast Reschedule.png')
  });}
  
  completeTask = (tasks ,index) => {
    let date = moment(date).format("YYYY-MM-DD");
    this.props.CompletedTaskAction({ tasks,index, date });
    this.setState({
      showBtns: false,
      showToast: true,
      toastMsg: 'You have successfully completed the task',
      toastImage: require('../assets/Toast completed.png')
    });
  };
  deleteTask = (tasks, index) => {
    this.props.DeleteTask({
      tasks,
      index
    });
    this.setState({
      showBtns: false,
      showToast: true,
      toastMsg: 'You have successfully deleted the task',
      toastImage: require('../assets/Toast Delete.png')
    });
  };
  _onButtonClick = ( tasks ,index)=> {
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
        showToast: false
      });
    }
  };

  // componentDidMount() 
  static getDerivedStateFromProps(props, state)
  {
    let tempArr = []
    // this.overDueTasksArr = [];
      props.cards.map((tasks, index) => {
      var d = tasks.createDate;
      taskDate = moment(d).format("MMM D");
      var currentDate = moment().format("MMM D");

      console.log("yes im working");
      if (moment(taskDate).isBefore(currentDate)) {
        tempArr.push(tasks);

      }

    })
    let copyState = {...state, overDueTasksArr: tempArr}
      
    
    // this.setState({
    //   ...this.state,
    //   overDueTasksArr: tempArr
    // })
    console.log(copyState);
    return copyState;
  }




  render() {
    const {date} = this.state.date;
    console.log(this.props.cards,"consoling cards ");
    return (
      <React.Fragment>      
        
        
        {this.props.cards.map((tasks, index) => {
        var d = tasks.createDate;


        var currentDate = moment().format("MMM D");
        taskDate = moment(d).format("MMM D");
        // console.log(taskDate);
        // console.log((moment(taskDate).isBefore(currentDate)));
      // if (moment(taskDate).isBefore(currentDate)) {
        

        if (!(moment(taskDate).isBefore(currentDate))) {
          var date = tasks.createDate.slice(0, 4) + "-" + tasks.createDate.slice(5, 7) + "-" + tasks.createDate.slice(8, 10);
          if (date != undefined) {
            var d = date;
            d = moment(d).format("MMM D");
            taskDate = d;
          }
          ;
          return (
            <main>
                <p>{taskDate}</p>
            <div className="ItemContainer" key ={tasks.parentId} >
          
              <div className="StatusNoneIcon">
                <img
            src={StatusNoneIcon}
            onClick={() => this.DisplayActionsBtns(tasks)}
            />
              </div>
              <p className="taskData">{tasks.taskName}</p>

              {this.state.showBtns &&
            this.state.selectedId === tasks.taskId ? (
              <div className="editTaskButtons">
                  <img
                    src={Completed}
                    onClick={() => this.completeTask(tasks,index)}
                  />
                  <img
                    src={Reschedule}
                    onClick={() => this._onButtonClick(tasks,index)}
                  />
                  <img 
                    src={Delete}
                    onClick={() => this.deleteTask(index)}
                  />
                </div>
              ) : null}
            </div>
            </main>
            );
        }


      })}
        {this.state.showToast ? <Toast showToast={this.state} /> : null}

        {this.state.showComponent ? (
        <Calendar
        className="calendar"
        onChange={this.rescheduleTask}
        value={date}
        />
        ) : null}
{/* 
          {
            this.overDueTasksArr != null? console.log(this.overDueTasksArr,"im array"): console.log("array is null")
          } */}

        {
      this.state.overDueTasksArr != null ?
        this.state.overDueTasksArr.map((tasks, index) => {



          // tasks.status="CompletedTasks";
          return (
            <main>
                  <p>{  moment(tasks.createDate).format("MMM D")}</p>
              <div className="ItemContainer">
            
                <div className="StatusNoneIcon">
                  <img
            src={overDue}
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
                {this.state.showToast ? <Toast showToast={this.state} /> : null}
             
              </div>
              </main>
            );
          }):
          // overDueTasksArr = []
          null
        }
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
  console.log(state.allTasks.Task,"testing...............");
  return {
    data: state.allTasks,
    cards: state.allTasks.Task,
  // sort:state.allTasks.sortedData,
  };
};

export default connect(
  myStateToProps,
  {
    TasksApi,
    CompletedTaskAction,
    RescheduleTask,
    DeleteTask,
  })(Taskitem);