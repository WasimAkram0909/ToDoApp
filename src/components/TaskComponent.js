import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import '../css/Taskitem.css';
var completeImage = require("../assets/Completed Tasks.png");
var rescheduleImage = require("../assets/Reschedule.svg");

class TaskComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.sta);
    return (
      this.props.sta.map((tasks, i) => {
        if (this.props.match.url === tasks.status) {
          if (this.props.match.url === "/dashboard/Completed Tasks") {
            var image = completeImage;
            console.log("complete", image);
          } else if (this.props.match.url === "/dashboard/Rescheduled Tasks") {
            var image = rescheduleImage;
            console.log("rescudule");
          }
          return (
            <React.Fragment>
              {this.props.date.map((date) =>
                <p>{date.date1}</p>
              )}
              <div className="ItemContainer">

                <div className="StatusNoneIcon">
                  <img src={image} alt='images' />
                </div>

                <p className="taskData">
                  {tasks.Task}
                </p>
              </div>
            </React.Fragment>
          );
        }
      }
      )
    )
  }
}
const myStateToProps = state => {
  console.log(state.complete.rescheduleData);
  return {
    sta: state.allTasks.Task,
    date: state.complete.rescheduleData,
    date:state.complete.completeData,
  }
}
export default withRouter(connect(myStateToProps)(TaskComponent));