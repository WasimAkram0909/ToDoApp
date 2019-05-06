import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Taskitem.css';
import moment from 'moment';
class TaskComponent extends Component {
  render() {
    var result = this.props.editData.reduce(function(r, a) {
      r[a.createDate] = r[a.createDate] || [];
      r[a.createDate].push(a);
      return r;
    }, Object.create(null));
    // console.log(result);

    var groupedTaskItems = Object.entries(result);
    var newGroupedTaskItems = groupedTaskItems.sort(function(a, b) {
      var c = new Date(a[0]);
      var d = new Date(b[0]);
      return c - d;
    });



    return newGroupedTaskItems.map((data,i) => {
      console.log(data);
      let updatedDate = data[0].createDate;
      updatedDate = moment(updatedDate).format('MMM D');
      console.log(updatedDate);
      data[1].map((TaskDetails)=>{
      var status =
        data[0].status.charAt(0).toUpperCase() +
        data[0].status.slice(1).toLowerCase();
      let name = `/dashboard/${status}Tasks`;

      if (this.props.path1 === name) {
      
        return (
          <React.Fragment key={i}>
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
  })
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
