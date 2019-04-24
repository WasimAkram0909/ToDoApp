import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Taskitem.css';
import HeadNav from './HeadNav';
import moment from "moment";



let taskDate ;
class TaskComponent extends Component {



  render() {
    
    return this.props.editData.map((data, i) => {
      let name = `/dashboard/${data.tasks.status}Tasks`;
        let d = data.date;
        d = moment(d).format("MMM D");
        taskDate = d; 
      if (this.props.path1 === name) {
        return (
          <React.Fragment> 
            <p>{taskDate}</p>
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
  console.log(state.allTasks.sortDate);
  console.log(state.allTasks.editData);

  let filteredData = state.allTasks.editData;

  if (state.allTasks.sortDate !==null){
    filteredData=   filteredData.filter(key => {
        // console.log(key);            
        let date=key.tasks.createDate.slice(0,4)+"-"+ key.tasks.createDate.slice(5,7)+"-"+ key.tasks.createDate.slice(8,10);
        // console.log(date);            
        if (state.allTasks.sortDate === date) {
          console.log(key);
          return key;
        }
      })
  }
  return {
    editData: filteredData,
  };

}



export default connect(myStateToProps)(TaskComponent);
