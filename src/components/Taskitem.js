

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
  HideActionButtons
} from '../actions';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar';
import Toast from './Toast';
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
    date: "",
    tasks1:"",
  };
  MyFunction = () => {
    var tempDate = new Date();
    var month = tempDate.toLocaleString('en-us', { month: 'long' }) + ' ' + tempDate.getDate();
    return (
    month
    );
    }


  rescheduleTask = selectdate => {
    // console.log(date);
    let day = selectdate.getDate();
    // console.log(day);
    let monthNum = selectdate.getMonth();
    let monthArr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let month = monthArr[monthNum];
    let date = day+" "+month;
    // console.log(this.state.tasks1);
    // console.log("this is final date",rescheduleDate, "tasks value", this.state.tasks1);
    this.props.RescheduleTask({tasks:this.state.tasks1,status:"RescheduledTasks",date});
    
    this.setState({ 
      showToast: true  ,
      showComponent:false,
      // date
    });
    
  };
  completeTask = (tasks) => {
    var date=this.MyFunction();
    // var Task=tasks.Task;
    // console.log(Task);
   const status=1;
   console.log(tasks)
    this.props.TasksApi({tasks,status});
    // this.props.CompletedTaskAction({tasks,date});
    this.props.HideActionButtons();
    this.setState({ 
      showToast: true,
     });
  };
  deleteTask = (tasks,index) => {
    // console.log(i);
    this.props.DeleteTask({tasks,index});
    this.props.HideActionButtons();
    this.setState({ 
      showToast: true,
      
     });
  };
  _onButtonClick = (tasks) => {
  // console.log(tasks);
    this.setState({
      showComponent: true,
      tasks1: tasks
    });
  };

  render() {
    // console.log(this.props.cards);
    // console.log(this.props.cards);
   const {date}=this.state.date;
   

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
                <img src={StatusNoneIcon} onClick={this.props.DisplayActions} />
              </div>
              <p className="taskData">{tasks.taskName}</p>
              {this.props.Status ? (
                <div className="editTaskButtons">
                
                  <img
                    src={Completed}
                    onClick={()=>this.completeTask(tasks)}
                  />
                  <img
                    src={Reschedule}
                    onClick={()=>this._onButtonClick(tasks)}
                  />
                  <img
                    src={Delete}
                    onClick={()=>this.deleteTask(tasks,index)}
                  />
                </div>
              ) : null}
              {this.state.showToast ? <Toast /> : null}
            </div>
            </main>
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
  // console.log(state.allTasks);
  // console.log(state.allTasks.Task);
  return {
    data: state.allTasks,
    cards: state.allTasks.Task,
    Status: state.allTasks.Status
  };
};

export default connect(
  myStateToProps,
  { DisplayActions, 
    TasksApi,
    CompletedTaskAction,
     RescheduleTask, DeleteTask,HideActionButtons }
)(Taskitem);
 