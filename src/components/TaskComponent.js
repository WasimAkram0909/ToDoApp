import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Taskitem.css';
import HeadNav from "./HeadNav";
class TaskComponent extends Component {
  render() {
    return (
      this.props.sta.map((tasks, i) => {
        var name = `/dashboard/${tasks.status}`;
        if (this.props.path1 === name) {
          return (
            <React.Fragment>
              {/* <HeadNav/> */}
              {this.props.date.map((date) =>
                <p>{date.date1}</p>
              )}
              <div className="ItemContainer">

                <div className="StatusNoneIcon">
                  <img src={require(`../assets/${tasks.status}.png`)} alt='images' />
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
    date: state.complete.completeData,
  }
}
export default connect(myStateToProps)(TaskComponent);