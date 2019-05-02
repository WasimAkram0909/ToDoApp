import React from 'react';
import { Calendar } from 'react-calendar';
import '../css/Taskitem.css';
import '../css/AddTask.css';
import StatusNoneIcon from "../assets/StatusNone.svg";
import CalendarIcon from '../assets/Calender Create Task.svg';
import { SaveTask} from '../actions';
import { connect } from 'react-redux';
import HeadNav from './HeadNav';
import SaveICon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Clear';
import moment from "moment";

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
    let currnetDate = moment(date).format("DD MM YYYY");
    currnetDate = currnetDate.slice(0,2)+"-"+ currnetDate.slice(3,5)+"-"+ currnetDate.slice(6,12);
    this.setState({
      newDate: currnetDate,
      showCalendar: false,
    })
  }
  handleSaveTask = () => {
    var taskcontent = this.myRef.current.value;
    var dateContent = this.state.newDate;
    var token=this.props.token;
    if(taskcontent==""){
      alert("Please enter the task");
      // document.getElementById("errorMessage").style.display="block";
      document.getElementById("taskData").focus()
    }else if(dateContent==""){
      alert("Please select date")
    }
    else{
      var TaskObject = {
        taskName:taskcontent,status:'',createDate:dateContent,token
      }
      this.props.SaveTask(TaskObject);
      this.setState({
        showComponent: false,
      });
      this.setState({
        showCalendar: false,
      });
      this.props.history.push("/dashboard")
    }
  }
  handleCalendar = () => {
    this.setState({
      showCalendar: true,
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
    });
    this.setState({
      showCalendar: false,
    });
  }
  ChangeState = () =>{
    this.setState({
      showComponent: false
    })
  }
  render() {
    return (
      <div className="DontEditThisClass">
        <HeadNav title="Todo" showFunction={this.ChangeState} showSort={true} />
        {this.state.showComponent ?
          <div className="display">
            <p>{this.MyFunction()}</p>
            <div id="ItemContainer" className="ItemContainer">
              <input className="taskData1" id="taskData" type="text" ref={this.myRef} required/>
              {/* <div><p id="errorMessage">Please enter the Task</p></div> */}
              <div className="editTaskButtons">
                <SaveICon className="SaveIcon" onClick={this.handleSaveTask} />
                <CancelIcon className="CancelIcon" onClick={this.handleClose} />
                <img src={CalendarIcon} onClick={this.handleCalendar} />
                {this.handleCalendar}
              </div>
            </div>
          </div>
          : null}
        {this.state.showCalendar ? (<Calendar className="react-calender"
          onChange={this.onChange} />) : null}
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