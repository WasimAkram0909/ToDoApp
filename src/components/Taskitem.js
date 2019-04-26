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
    let date = moment(selectdate).format('YYYY-MM-DD');
    console.log(this.state.tasks);
    this.state.tasks.status="Rescheduled";
    // console.log(this.state.tasks.createDate);
    
    this.state.tasks.createDate=date;
    console.log(this.state.tasks.createDate);
    this.props.UpdateTask({ tasks: this.state.tasks });
    this.setState({
      showComponent: false,
      showBtns: false,
      showToast: true,
      toastMsg: ' You have successfully rescheduled the task',
      toastImage: require('../assets/Toast Reschedule.png')
  });}
  completeTask = (tasks) => {
    // let date = moment(date).format("DD-MM-YYYY");
    let date=moment(date).format("YYYY-DD-MM");
   tasks.status="Completed";
  //  console.log(date);
   tasks.createDate=date;
  this.props.UpdateTask({tasks});
    this.setState({
      showBtns: false,
      showToast: true,
      toastMsg: 'You have successfully completed the task',
      toastImage: require('../assets/Toast completed.png')
    });
  };
  deleteTask = (tasks, index) => {
    // console.log(taskId);

    this.props.DeleteTask({ tasks, index });
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
    var abc= groupedTaskItems.sort(function(a,b){
      // console.log(a);
       var c = new Date(a[0]);
      //  console.log(c);
       var d = new Date(b);
       console.log(d)
       return c-d;
       });
       console.log(abc);
    var resultOverDue = this.state.overDueTasksArr.reduce(function(r, a) {
      r[a.createDate] = r[a.createDate] || [];
      r[a.createDate].push(a);
      return r;
    }, Object.create(null)
    )
    var groupedOverDueItems = Object.entries(resultOverDue);
  
    // console.log(_.sortBy(result1, 'date'));
//     result1.sort ( function (date1, date2){
//       return date1 - date2
//  });
//     var sortedDate=result1.sort(numberAs)
//     console.log(sortedDate);
// var date_sort_asc = function (date1, date2) {
//   if (date1 > date2) return 1;
//   if (date1 < date2) return -1;
//   return 0;
// };dates.sort(date_sort_asc);


    return (
      <React.Fragment>
        {abc.map((TaskDetails, i) => {
          // console.log(TaskDetails);
          
      var d = TaskDetails[0];
      var taskDate = moment(d).format("MMM D");
      var currentDate = moment().format("MMM D")
      // function numberAs(a,b) {
      //   return a-b;
      // }
      // taskDate.sort(numberAs);
      // var SortedData=function(taskDate,currentDate){
      //   return (taskDate-currentDate)
      // }
      // console.log("ascceding order"+ taskDate);
      if (!moment(taskDate).isBefore(currentDate)) {
        return (
          <main>
              <p className="dataClass">{moment(TaskDetails[0]).format("MMM D")}</p>
                {TaskDetails[1].map((Tasksdata, index) => {
            //  console.log(Taskdetails)
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



{ groupedOverDueItems.map((TaskDetails, i) => {
  var d = TaskDetails[0];
  taskDate = moment(d).format("MMM D");
  var currentDate = moment().format("MMM D")
    return (
      <main>
        <p className="dataClass">Over due</p>
        { /* <div className="ItemContainer"> */ }
          {TaskDetails[1].map((Tasksdata, index) => {
        //  console.log(Taskdetails)
        return (              <div className="ItemContainer" key ={Tasksdata.taskId}>
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
  if (state.allTasks.sortDate !== undefined && state.allTasks.sortDate !==null){
    filteredData=   filteredData.filter(key => {
        // console.log(key);            
        let date=key.createDate.slice(0,4)+"-"+ key.createDate.slice(5,7)+"-"+ key.createDate.slice(8,10);
        // console.log(date); 
        // console.log(state.allTasks.sortDate);          
        if (state.allTasks.sortDate === date) {
          return key;
        }
      })
  }


  return {
    data: state.allTasks,
    cards: filteredData
  };
};
export default connect(
  myStateToProps,
  {
    DeleteTask,
     UpdateTask
  })(Taskitem);
