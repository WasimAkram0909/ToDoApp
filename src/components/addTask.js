import React from 'react';
import { Calendar } from 'react-calendar';
import '../css/Taskitem.css';
import '../css/AddTask.css';
import CalendarIcon from '../assets/Calender Create Task.svg';
import { SaveTask } from '../actions';
import { connect } from 'react-redux';
import HeadNav from './HeadNav';
import SaveICon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Clear';
import moment from "moment";
import Toast from "./Toast.js"

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComponent: true,
      showCalendar: false,
      newDate: "",
      showToast: false,
      toastMsg: null,
    }
    this.myRef = React.createRef();
  }
  
  onChange = date => {
    let selectedDate = moment(date).format("YYYY-MM-DD");
    this.setState({
      newDate: selectedDate,
      showCalendar: false,
    })
  }
  makeToastFalse = () =>{
    setTimeout(() => {
      
      this.setState({
        showToast: false,
      })
    },4000);
    
  }
  
  handleSaveTask = () => {
    let currnetDate = moment(this.state.date).format("YYYY-MM-DD");
    var taskcontent = this.myRef.current.value;
    var dateContent = this.state.newDate;
    var token = this.props.token;
    if (taskcontent === "") {
      document.getElementById("taskData").focus();
      this.setState({
        showToast: true,
        toastMsg: " please enter the task",
      })
      this.makeToastFalse();
      
    }
     else if (dateContent === "") {
      this.setState({
        showToast: true,
        toastMsg: " Please select  date",
      })
      this.makeToastFalse();
    } 
    else if (dateContent < currnetDate) {
      this.setState({
        showToast: true,
        toastMsg: " Please select Valid date",
      })
      this.makeToastFalse();
      
    }
    else {
      var TaskObject = {
        taskName: taskcontent, status: '', createDate: dateContent, token
      }
      this.props.SaveTask(TaskObject);
      this.setState({
        showComponent: false,
        showCalendar: false,
      });
      this.props.history.push("/dashboard")
    }
  }
  handleCalendar = () => {
    this.setState({
      showCalendar: (this.state.showCalendar ? false : true),
    });
  }
  MyFunction = () => {
    var tempDate = new Date();
    var month = tempDate.toLocaleString('en-us', { month: 'long' }) + ' ' + tempDate.getDate();
    return (
      month
    );
  }
  handleClose = () => {
    this.props.history.push("/dashboard");
    this.setState({
      showComponent: false,
      showCalendar: false,
    });
  }
  ChangeState = () => {
    this.setState({
      showComponent: false
    })
  }
  render() {
    return (
      <div className="DontEditThisClass">
      {console.log(this.state.showToast)}
        <HeadNav title="Add Task" showFunction={this.ChangeState} showSort={false} showAdd={false} />
        {this.state.showComponent ?
          <div className="display">
            <p>{this.MyFunction()}</p>
            <div id="ItemContainer" className="ItemContainer">
              <input className="taskData1" id="taskData" type="text" ref={this.myRef} required />
              <div className="editTaskButtons">
                <div title="save" onClick={this.handleSaveTask} className="lef_mar actionIconsHover  actionIconsHover1">
                  <SaveICon className="addTaskIcons SaveIcon"  />

                </div>
                <div title="cancel" onClick={this.handleClose}  className="lef_mar actionIconsHover actionIconsHover1">
                  <CancelIcon className="addTaskIcons CancelIcon " />

                </div>
                <div  title="select date" onClick={this.handleCalendar} className="lef_mar actionIconsHover actionIconsHover1">
                  <img src={CalendarIcon}  className="CancelIcon" alt=""/>
                </div>

              </div>
            </div>
          </div>
          : null}
        {this.state.showCalendar ? (
          <div className="calenderClass_addTask supportClass">
            <Calendar className="calenderClass_addTask"
              onChange={this.onChange} />
          </div>)
          : null}
        {this.state.showToast ? <Toast  showToast={this.state} showUndoOpt={false} showImg={false}></Toast>:null}
      </div>
    );
  }
}
const myStateToProps = (state) => {
  return {
    cards: state.allTasks.Task,
    token: state.allTasks.accessToken,
  }
}
export default connect(myStateToProps, {
  SaveTask
})(AddTask);