import React from 'react';
// import '/home/wtt181/ToDoApp/src/css/addtask.css';
import { Calendar } from 'react-calendar';
import '../css/Taskitem.css';
import StatusNoneIcon from "../assets/StatusNone.svg";
import SaveICon from '../assets/baseline_check_black_18dp.png';
import CancelIcon from '../assets/baseline_clear_black_18dp.png';
// import CancelIcon from '../assets/cancel.png'
import CalendarIcon from '../assets/Calender Create Task.svg';
// import { create } from 'domain';
import { SaveTask } from '../actions';
import { connect } from 'react-redux';
// import Date from './date';

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComponent: false,
      showCalendar: false,
      date: new Date(),
    }
    this.myRef = React.createRef();
  }


  onChange = date => {
    console.log(date);
    this.setState({
      date
    })
  }

//   addtask = () => {
//     console.log('addtask');
//     this.setState({
//       showComponent: true,
//     });
//   // return(<div>
//   //     <input type="text"/>
//   // </div>)
//   }
  handleSaveTask = () => {
    console.log('savetask');
    var taskcontent = this.myRef.current.value;
    console.log(taskcontent);
    this.props.SaveTask(taskcontent);
    this.setState({
      showCalendar: false,
    });


  }

  handleCalendar = () => {
    console.log('claendar');
    this.setState({
      showCalendar: true,
    });
  }
  MyFunction = () => {
    // const date = new Date();  // 2009-11-10
    // const month = date.toLocaleString('en-us', { month: 'long' });
    // console.log(month);

    var tempDate = new Date();
    var month = tempDate.toLocaleString('en-us', { month: 'long' }) + ' ' + tempDate.getDate();
    // const currDate = "Current Date= " + date;
    return (
      <p>{month}</p>
      );
  }
  handleClose=()=>{
    this.setState({
      showComponent: false,
    });
    this.setState({
      showCalendar: false,
    });
    // document.getElementById('ItemContainer').style='display:none';

  }
  render() {
    return (
      <div>
        <button className="addtaskbutton" onClick={this.addtask}>AddTask</button>
         {this.state.showComponent ?
            <div className="display">
              {this.MyFunction()}
                <div id="ItemContainer" className="ItemContainer">
                  {/* <textarea className="taskData1" ref={this.myRef} /> */}
                    <input className="taskData1" type="text"  ref={this.myRef}/>  
                      <div className="editTaskButtons">
                        <img className="SaveIcon" src={SaveICon} onClick={this.handleSaveTask} />
                        <img className="CancelIcon" src={CancelIcon} onClick={this.handleClose} />
                        <img src={CalendarIcon} onClick={this.handleCalendar} />
                        {this.handleCalendar}  
                      </div>
                </div>
              </div> : null}
          {this.state.showCalendar ? (<Calendar className="react-calender"
      // className="react-calendar__month-view"
          onChange={this.onChange} value={this.state.date} />) : null}
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
  SaveTask
})(AddTask);