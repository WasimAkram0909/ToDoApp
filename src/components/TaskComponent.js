import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Taskitem.css';
import moment from 'moment';
class TaskComponent extends Component {
  render() {
    return this.props.editData.map(data => {
      var status =
        data.status.charAt(0).toUpperCase() +
        data.status.slice(1).toLowerCase();
      let name = `/dashboard/${status}Tasks`;
      let updatedDate = data.createDate;
      updatedDate = moment(updatedDate).format('MMM D');

      if (this.props.path1 === name) {
        return (
          <React.Fragment>
            <p className="dataClass">{updatedDate}</p>
            <div className="ItemContainer">
              <div className="StatusNoneIcon">
                <img
                  src={require(`../assets/${status}Tasks.png`)}
                  alt="images"
                />
              </div>
              <p className="taskData">{data.taskName}</p>
            </div>
          </React.Fragment>
        );
      }
    });
  }
}

const myStateToProps = state => {
  let filteredData = state.allTasks.updatedTasks;
  if (
    state.allTasks.sortDate !== undefined &&
    state.allTasks.sortDate !== null
  ) {
    filteredData = filteredData.filter(key => {
      let createDate = moment(key.createDate).format('YYYY-MM-DD');
      if (state.allTasks.sortDate === createDate) {
        return key;
      }
    });
  }

  return {
    editData: filteredData
  };
};
export default connect(myStateToProps)(TaskComponent);
