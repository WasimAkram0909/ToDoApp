import React from 'react';
// import '/home/wtt181/ToDoApp/src/css/addtask.css';
import { Calendar } from 'react-calendar';
import '../css/Taskitem.css';
import '../css/AddTask.css';
import StatusNoneIcon from "../assets/StatusNone.svg";
// import SaveICon from '../assets/baseline_check_black_18dp.png';
// import CancelIcon from '../assets/baseline_clear_black_18dp.png';
// import CancelIcon from '../assets/cancel.png'
import CalendarIcon from '../assets/Calender Create Task.svg';
// import { create } from 'domain';
import { SaveTask,SaveTaskAction } from '../actions';
import { connect } from 'react-redux';
import HeadNav from './HeadNav';
// import Date from './date';
import SaveICon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Clear';

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComponent: true,
      showCalendar: false,
      date: new Date(),
      newDate: ""
    }
    this.myRef = React.createRef();
  }


  onChange = date => {
    console.log(date);
    let day = date.getDate();
    let monthArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let mon = date.getMonth();
    let month = monthArr[mon];
    let currnetDate = month +" " +day;
    this.setState({
      newDate: currnetDate
    })

   
  }


  handleSaveTask = () => {
    console.log('savetask');
    var taskcontent = this.myRef.current.value;
    var dateContent = this.state.newDate;
    // console.log(dateContent);
    // console.log(taskcontent);
    var TaskObject = {
      Task:taskcontent,status:'',date:dateContent
      
      
    }
    console.log(TaskObject);
// this TaskObject holds all data of add task component 
// need to send this to reducer

    this.props.SaveTaskAction(TaskObject);
    this.setState({
      showComponent: false,
    });
    this.setState({
      showCalendar: false,
    });
  }
  handleCalendar = () => {
    console.log('claendar');
    // var datevar = claendar.toLocaleString('en-us', { month: 'long' }) + ' ' + claendar.getDate();
    this.setState({
      showCalendar: true,
    });
  }
  MyFunction = () => {
    // const date = new Date();  // 2009-11-10
    // const month = date.toLocaleString('en-us', { month: 'long' });
    // console.log(month);
    var tempDate = new Date();
    console.log(tempDate);
    var month = tempDate.toLocaleString('en-us', { month: 'long' }) + ' ' + tempDate.getDate();
    return (
      month
    );
  }
  handleClose = () => {
    this.setState({
      showComponent: false,
    });
    this.setState({
      showCalendar: false,
    });
  
    // document.getElementById('ItemContainer').style='display:none';

  }
  ChangeState = () =>{
    this.setState({
      showComponent: false
    })
  }
  render() {
    return (
      <div className="DontEditThisClass">
        <HeadNav title="Todo" showFunction={this.ChangeState} showAdd={true} />
        {/* <button className="addtaskbutton" onClick={this.addtask}>AddTask</button> */}
        {this.state.showComponent ?


          <div className="display">
            <p>{this.MyFunction()}</p>

            <div id="ItemContainer" className="ItemContainer">
              {/* <textarea className="taskData1" ref={this.myRef} /> */}
              <input className="taskData1" type="text" ref={this.myRef} />
              <div className="editTaskButtons">
                <SaveICon className="SaveIcon" onClick={this.handleSaveTask} />
                <CancelIcon className="CancelIcon" onClick={this.handleClose} />
                {/* <img className="SaveIcon" src={SaveICon} onClick={this.handleSaveTask} /> */}
                {/* <img className="CancelIcon" src={CancelIcon} onClick={this.handleClose} /> */}
                <img src={CalendarIcon} onClick={this.handleCalendar} />
                {this.handleCalendar}
              </div>
            </div>
          </div>
          : null}
        {this.state.showCalendar ? (<Calendar className="react-calender"
          // className="react-calendar__month-view"
          onChange={this.onChange} />) : null}
      </div>

    );
  }
}
const myStateToProps = (state) => {
  console.log(state.allTasks.Task);
  return {
    cards: state.allTasks.Task
  }
}
export default connect(myStateToProps, {
  SaveTask,SaveTaskAction
})(AddTask);