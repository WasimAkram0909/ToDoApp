import React, { Component } from 'react';
import HocComponent from "./HocComponent"
// import Taskitem from './Taskitem';
import { connect } from "react-redux";
import '../css/Taskitem.css';
class CompleteTask extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        this.props.text.map((tasks, i) => {
            return (
      <React.Fragment>
                <div className="ItemContainer">
                
              <div className="StatusNoneIcon">
                <img src={this.props.data.image}  />
                </div>

          <p className="taskData">
          {tasks.Task}
          </p>
 </div>
                </React.Fragment>
                 );
                })
      );
  }
}
const myStateToProps = state => {
  console.log(state.complete);
  return {
    data: state.complete.completeImage,
    text:state.complete.completeData
  }
}
export default connect(myStateToProps)(CompleteTask);