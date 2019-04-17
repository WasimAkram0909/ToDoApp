import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Taskitem.css';
import HeadNav from "./HeadNav";
class TaskComponent extends Component {
  render() {
     console.log(this.props);
    return (
      this.props.editData.map((data, i) => {
        console.log(data.date1);
        console.log(data.tasks.Task);
        var name = `/dashboard/${data.tasks.status}`;
        if (this.props.path1 === name) {
          return (
            <React.Fragment>
              {/* <HeadNav/> */}
              {/* {this.props.date.map((date) => */}
                <p>{data.date1}</p>
              {/* )} */}
              <div className="ItemContainer">

                <div className="StatusNoneIcon">
                  <img src={require(`../assets/${data.tasks.status}.png`)} alt='images' />
                </div>
                <p className="taskData">
                  {data.tasks.Task}
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
  console.log(state.allTasks.Task);
  return {
    sta: state.allTasks.Task,
    editData: state.allTasks.editData,
    // date: state.allTasks.editData,
  }
}
export default connect(myStateToProps)(TaskComponent);