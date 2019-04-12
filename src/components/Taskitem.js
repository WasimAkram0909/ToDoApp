import React, { Component } from 'react';
import '/home/wtt170/ToDoApp/src/css/Taskitem.css';
import {connect } from 'react-redux';
import StatusNoneIcon from "../assets/StatusNone.svg";
import RescheduleIcon from "../assets/Reschedule.svg";
import CompletedIcon from "../assets/Completed.svg";
import DeleteIcon from "../assets/Delete.svg";
import {DisplayActions} from '../actions';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar';



class Taskitem extends Component{
    constructor(props){
        super(props);
    }
  state = {
    showComponent: false,
    date: new Date(),
  }
  onChange = date => this.setState({ date })
  _onButtonClick=() =>{
    this.setState({
      showComponent: true,
    });
  }
    render(){ 
        return(
            <React.Fragment>
                    {this.props.cards.map((tasks, i) => {
        return (
          <div className="ItemContainer">
                            <div className="StatusNoneIcon">
                                <img src={StatusNoneIcon}  onClick={this.props.DisplayActions}/>
                            </div>
                            <p className="taskData">
                            {tasks.Task}
                            </p>
                            {this.props.Status ?  <div className="editTaskButtons">
                        <img  src={CompletedIcon} />
                        <img  src={RescheduleIcon} onClick={this._onButtonClick} />
                        {this.state.showComponent ? <Calendar className="calendar" onChange={this.onChange} value={this.state.date}/> : null}
                        <img  src={DeleteIcon} /></div>:null}
                        
                            </div>

        )           
            
      })
    }
            </React.Fragment>
        )
    
  }
}
const myStateToProps = (state) => {
    console.log(state.allTasks.Status);
  console.log(state.allTasks.Task);
  return {
    cards: state.allTasks.Task,
    Status:state.allTasks.Status
  }
}


export default connect(myStateToProps,{DisplayActions})(Taskitem);
