import React, { Component } from 'react';
import '../css/Taskitem.css';
import { connect } from 'react-redux';
import StatusNoneIcon from '../assets/StatusNone.svg';
import { DeleteTask, UpdateTask } from '../actions';
import Calendar from 'react-calendar';
import Toast from './Toast';
import Completed from '../assets/Completed.svg';
import overDue from '../assets/overdue.svg';
import Reschedule from '../assets/Reschedule.svg';
import Delete from '../assets/Delete.svg';
import moment from 'moment';
let taskDate = '';
class Taskitem extends Component {
  state = {
    showComponent: false,
    showToast: false,
    showBtns: false,
    date: '',
    tasks: '',
    selectedId: null,
    toastMsg: null,
    toastImage: null,
    overDueTasksArr: [],
    noTasks: '',
    undoTask: false,
  };
  undoMyChanges = () => {
    this.setState({
      undoTask: true,
    })
  }
  rescheduleTask = selectdate => {
    let date = moment(selectdate).format('YYYY-MM-DD');
    let currentDate = new Date();
    currentDate = moment(currentDate).format('YYYY-MM-DD');
    if(date <= currentDate){
      alert("Please Select Valid Date");
    }
    else{
    this.setState({
      showComponent: false,
      showBtns: false,
      selectedId: null,
      showToast: true,
      toastMsg: ' You have successfully rescheduled the task',
      toastImage: require('../assets/Toast Reschedule.png')
    });
    setTimeout(() => {
      if (this.state.undoTask === false) {
        this.state.tasks.status = 'Rescheduled';
        this.state.tasks.createDate = date;
        this.props.UpdateTask({ tasks: this.state.tasks });
      }
      this.setState({
        undoTask: false,
      })
    }, 2500);
  };
}
  completeTask = tasks => {
    let currentDate = new Date();
    currentDate = moment(currentDate).format('YYYY-MM-DD');
    this.setState({
      showBtns: false,
      selectedId: null,
      showToast: true,
      showComponent: false,      
      toastMsg: 'You have successfully completed the task',
      toastImage: require('../assets/Toast completed.png')
    });
    setTimeout(() => {
      if (this.state.undoTask === false) {
        tasks.status = 'Completed';
        tasks.createDate = currentDate;
        this.props.UpdateTask({ tasks });
      }
      this.setState({
        undoTask: false,
      })
    }, 2500);
  };
  deleteTask = (tasks) => {
    this.setState({
      showBtns: false,
      selectedId: null,
      showToast: true,
      showComponent: false,      
      toastMsg: 'You have successfully deleted the task',
      toastImage: require('../assets/Toast Delete.png')
    });
    setTimeout(() => {
      if (this.state.undoTask === false) {
        this.props.DeleteTask({ tasks });
      }
      this.setState({
        undoTask: false,
      })
    },2500);
  };
  onRescheduleButtonClick = (tasks, index) => {
    this.setState({
      showComponent: (this.state.showComponent ? false : true),
      tasks: tasks
    });
  };
  DisplayActionsBtns = taskId => {
      this.setState({
        showBtns: true,
        selectedId: (this.state.selectedId === taskId) ? null : taskId,
        showToast: false,
        showComponent: false,
      });
    }
  static getDerivedStateFromProps(props, state) {
    let tempArr = [];
    props.cards.map((tasks, index) => {
      if (tasks !== undefined) {
        var d = tasks.createDate;
        taskDate = moment(d).format('MMM D YYYY');
        var currentDate = moment().format('MMM D YYYY');
        if (moment(taskDate).isBefore(currentDate)) {
          tempArr.push(tasks);
        }
      }
      return tempArr      
    });
    let copyState = { ...state, overDueTasksArr: tempArr };
    return copyState;
  }
  render() {
    const { date } = this.state.date;
    var result = this.props.cards.reduce(function (r, a) {
      r[a.createDate] = r[a.createDate] || [];
      r[a.createDate].push(a);
      return r;
    }, Object.create(null));

    var groupedTaskItems = Object.entries(result);
    var newGroupedTaskItems = groupedTaskItems.sort(function (a, b) {
      var c = new Date(a[0]);
      var d = new Date(b[0]);
      return  d-c;
    });
    if (this.props.cards.length !== 0) {
      return (
        <React.Fragment>

          {newGroupedTaskItems.map((TaskDetails, i) => {
            var d = TaskDetails[0];
            var taskDate = moment(d).format('MMM D');
            var currentDate = moment().format('MMM D');
            if (!moment(taskDate).isBefore(currentDate)) {
              return (
                <main key={i}>
                  <p className="dataClass">
                    {moment(TaskDetails[0]).format('MMM D')}
                  </p>
                  { 
                    TaskDetails[1].map((Tasksdata, index) => {
                      
                    let itemCls = '';
                    if (this.state.selectedId) {
                      if (this.state.selectedId === Tasksdata.taskId || this.state.selectedId === null) {
                        itemCls = 'active_item1';
                      } else {
                        itemCls = 'inactive_item';
                      }
                    }
                  
                    return (
                      <React.Fragment key={index}>
                      <div className={`ItemContainer ${itemCls}`} key={Tasksdata.taskId}>
                        <div className="StatusNoneIcon">
                          <img
                            className="cursorclass"
                            src={StatusNoneIcon}
                            onClick={() => this.DisplayActionsBtns(Tasksdata.taskId)}
                            alt=""
                          />
                        </div>
                        <p className="taskData"  onClick={() => this.DisplayActionsBtns(Tasksdata.taskId)}>{Tasksdata.taskName}</p>
                        {this.state.showBtns &&
                          this.state.selectedId === Tasksdata.taskId ? (
                            <div className="editTaskButtons">
                              <img className="actionIconsHover cursorclass"
                                title="Complete Task"
                                src={Completed}
                                onClick={() => this.completeTask(Tasksdata)}
                                alt=""
                              />
                              <img
                                title="Reschedule Task "
                                className="actionIconsHover cursorclass"
                                src={Reschedule}
                                onClick={() => this.onRescheduleButtonClick(Tasksdata)}
                                alt=""
                              />
                              <img
                                title="Delete Task"
                                className="actionIconsHover cursorclass"
                                src={Delete} alt=""
                                onClick={() =>
                                  this.deleteTask(Tasksdata)
                                }
                              />
                            </div>
                          ) : null}
                  
                      </div>
                                {(this.state.showComponent && (this.state.selectedId === Tasksdata.taskId))? (
                                  
                                  <div className="calender-position">
                                    <Calendar
                                      onChange={this.rescheduleTask}
                                      value={date}
                                      className="calender-class-reschedule"
                                    />
                                  </div>) : null}
                              

                                  </React.Fragment>
                    );
                  })}
                 
                </main>
                
              );
             
            }
          })}
          {(this.state.overDueTasksArr.length !== 0) ?
            <React.Fragment>
              <p className="dataClass">Over due </p>
              {this.state.overDueTasksArr.map((Tasksdata, index) => {
                let itemCls = '';
                if (this.state.selectedId) {
                  if (this.state.selectedId === Tasksdata.taskId || this.state.selectedId === null) {
                    itemCls = 'active_item';
                  } else {
                    itemCls = 'inactive_item';
                  }
                }
                return (
                  <React.Fragment key={index}>                  
                  <div className={`ItemContainer ${itemCls}`} key={Tasksdata.taskId}>
                    <div className="StatusNoneIcon">
                      <img
                        className="cursorclass"
                        src={overDue}
                        onClick={() => this.DisplayActionsBtns(Tasksdata.taskId)}
                        alt=""
                      />
                    </div>
                    <p className="taskData"  onClick={() => this.DisplayActionsBtns(Tasksdata.taskId)}>{Tasksdata.taskName}</p>
                    {this.state.showBtns &&
                      this.state.selectedId === Tasksdata.taskId ? (
                        <div className="editTaskButtons">
                          <img
                                title="Complete Task"
                                className="actionIconsHover cursorclass"
                            src={Completed}
                            onClick={() => this.completeTask(Tasksdata)}
                            alt=""
                          />
                          <img
                          title="Reschedule Task"
                          className="actionIconsHover cursorclass"
                            src={Reschedule}
                            onClick={() => this.onRescheduleButtonClick(Tasksdata)}
                            alt=""
                          />
                          <img
                            title="Delete Task"
                          className="actionIconsHover cursorclass"
                            src={Delete}
                            onClick={() => this.deleteTask(Tasksdata)}
                            alt=""
                          />
                        </div>
                      ) : null}
                  </div>
                  {(this.state.showComponent && (this.state.selectedId === Tasksdata.taskId))? (
                      <div className="calender-position">
                        <Calendar
                          onChange={this.rescheduleTask}
                          value={date}
                          className="calender-class-reschedule"
                        />
                      </div>) : null}
                      </React.Fragment>
                );
              })
              }</React.Fragment> : null}
          {this.state.showToast ? <Toast showToast={this.state} undoMyChanges={this.undoMyChanges} /> : null}
        </React.Fragment>
      );
    } else {
      return (
        <div className="noDataFound">
          Please add the task by pressing add task button in right side top of
          the page
        </div>
      );
    }
  }
}
const myStateToProps = state => {
  let filteredData = state.allTasks.task;
  if (
    state.allTasks.sortDate !== undefined &&
    state.allTasks.sortDate !== null
  ) {
    filteredData = filteredData.filter(key => {
      let createDate = moment(key.createDate).format('YYYY-MM-DD');
      if (state.allTasks.sortDate === createDate) {
        return key;
      }
    }
  );
  }
  return {
    data: state.allTasks,
    cards: filteredData,
    token: state.allTasks.accessToken
  };
};
export default connect(
  myStateToProps,
  {
    DeleteTask,
    UpdateTask
  }
)(Taskitem);
