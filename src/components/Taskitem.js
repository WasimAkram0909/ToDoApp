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
import Toast from './Toast';

class Taskitem extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showComponent: false,
    showToast: false,
    date: new Date()
  };
  onChange = date => {
    this.setState({ date });
    this.setState({ showToast: true ,
      showComponent: false,});
  };
  completeFun = () => {
    this.props.completedTaskAction();
    this.setState({ showToast: true });
  };
  deleteFun = () => {
    this.props.DeleteTask();
    this.setState({ showToast: true });
  };
  _onButtonClick = () => {
    this.props.RescheduleTask();
    this.setState({
      showComponent: true
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
                    onClick={this.completeFun}
                  />
                  <img
                    src={this.props.data.rescheduleData.image}
                    onClick={this._onButtonClick}
                  />
                  {this.state.showComponent ? (
                    <Calendar
                      className="calendar"
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                  ) : null}
                  <img
                    src={this.props.data.deleteTask.image}
                    onClick={this.deleteFun}
                  />
                </div>
              ) : null}
              {this.state.showToast ? <Toast /> : null}
            </div>
          );
        })}
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
    // reshedule:state.allTasks.rescheduleData,
  };
};

export default connect(
  myStateToProps,
  { DisplayActions, completedTaskAction, RescheduleTask, DeleteTask }
)(Taskitem);
