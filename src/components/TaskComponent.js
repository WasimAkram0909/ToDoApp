import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Taskitem.css';
import HeadNav from './HeadNav';
import moment from "moment";
let taskDate;
class TaskComponent extends Component {
  render() {
    console.log(this.props.editData);

    return this.props.editData.map((data, i) => {
      console.log(data.status);
      var name2 = data.status.charAt(0).toUpperCase() + data.status.slice(1).toLowerCase();
      console.log(name2);
      let name = `/dashboard/${name2}Tasks`;
      let d = data.createDate;
      console.log(d);
      d = moment(d).format("MMM D");
      taskDate = d;

      if (this.props.path1 === name) {
        return (
          <React.Fragment>
            <p className="dataClass">{taskDate}</p>
            <div className="ItemContainer">
              <div className="StatusNoneIcon">
                <img
                  src={require(`../assets/${name2}Tasks.png`)}
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
  // console.log(state.allTasks.sortDate);
  let filteredData = state.allTasks.CompletedTasks;
  console.log(state.allTasks.sortDate);
  if (state.allTasks.sortDate !== undefined && state.allTasks.sortDate !== null) {
    filteredData = filteredData.filter(key => {
      // console.log(key);            
      let date = key.createDate.slice(0, 4) + "-" + key.createDate.slice(5, 7) + "-" + key.createDate.slice(8, 10);
      // console.log(date); 
      // console.log(state.allTasks.sortDate);          
      if (state.allTasks.sortDate === date) {
        return key;
      }
    })
  }

  console.log(filteredData);
  return {
    editData: filteredData,
  };

}
export default connect(myStateToProps)(TaskComponent);
