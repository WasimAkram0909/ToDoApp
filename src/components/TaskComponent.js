import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Taskitem.css';
import HeadNav from './HeadNav';
class TaskComponent extends Component {
  render() {
    console.log(this.props.editData);
    return this.props.editData.map((data, i) => {
      console.log(data);
      console.log(data.tasks.taskName);
      console.log(data.tasks.status);
      console.log(data.date);
      console.log(this.props.path1);
      var name = `/dashboard/${data.tasks.status}Tasks`;
      // var name = `/dashboard/CompletedTasks`;
      console.log(name);

      if (this.props.path1 === name) {
        console.log(name);
        return (
          <React.Fragment> 
            {/* <HeadNav/> */}
            {/* {this.props.date.map((date) => */}
            <p>{data.date}</p>
            {/* )} */}
            <div className="ItemContainer">
              <div className="StatusNoneIcon">
                <img
                  src={require(`../assets/${data.tasks.status}Tasks.png`)}
                  alt="images"
                />
              </div>
              <p className="taskData">{data.tasks.taskName}</p>
            </div>
          </React.Fragment>
        );
      }
    });
  }
}


const myStateToProps = state => {
  // console.log(state.allTasks.Task);
  return {
    editData: state.allTasks.editData
  };
};
export default connect(myStateToProps)(TaskComponent);
