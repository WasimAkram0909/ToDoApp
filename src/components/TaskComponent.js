import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Taskitem.css';
import HeadNav from './HeadNav';
class TaskComponent extends Component {
  render() {
    console.log(this.props.editData);
    return this.props.editData.map((data, i) => {
      console.log(data);
      console.log(data.tasks.status);
      var name = `/dashboard/${data.tasks.status}Tasks`;
      // var name = `/dashboard/CompletedTasks`;
      console.log(name);

      if (this.props.path1 === name) {
        return (
          <React.Fragment> 
            {/* <HeadNav/> */}
            {/* {this.props.date.map((date) => */}
            <p>{data.createDate}</p>
            {/* )} */}
            <div className="ItemContainer">
              <div className="StatusNoneIcon">
                <img
                  src={require(`../assets/${data.tasks.status}Tasks.png`)}
                  alt="images"
                />
              </div>
              <p className="taskData">{data.tasks.Task}</p>
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
