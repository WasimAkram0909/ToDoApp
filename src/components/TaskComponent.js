import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Taskitem.css';
import moment from 'moment';
class TaskComponent extends Component {

  render() {
    //Grouping task items
    var result = this.props.editData.reduce(function(r, a) {
      r[a.createDate] = r[a.createDate] || [];
      r[a.createDate].push(a);
      return r;
    }, Object.create(null));

    var groupedTaskItems = Object.entries(result); //Converted Object Into Array

    return (
      <React.Fragment>
        {groupedTaskItems.map((taskDetails) => {
        return (
          <main>
              <p className="dataClass">
                {moment(taskDetails[0]).format('MMM D')}
              </p>
          {taskDetails[1].map((taskData, i) => {
            var status = taskData.status.charAt(0).toUpperCase() +
            taskData.status.slice(1).toLowerCase();
            let name = `/dashboard/${status}Tasks`;
            if (this.props.path1 === name) {
              return (
                <div className="ItemContainer">
                      <div className="StatusNoneIcon">
                        <img src={require(`../assets/${status}Tasks.png`)}
                alt="images" />
                      </div>
                      <p className="taskData">{taskData.taskName}</p>
                    </div>
              )
            }
          })
          }
            </main>)
      })
      }
      </React.Fragment>
    )
  }
}

const myStateToProps = state => {
  let filteredData = state.allTasks.updatedTasks;
  if (
    state.allTasks.sortDate !== undefined &&
    state.allTasks.sortDate !== null
  ) {
    filteredData = filteredData.filter(key => {
      console.log(key);
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
