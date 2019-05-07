

// // import React, { Component } from 'react';
// // import '../css/Taskitem.css';
// // import { connect } from 'react-redux';
// // import StatusNoneIcon from '../assets/StatusNone.svg';
// // import {
// //   DisplayActions,
// //   CompletedTaskAction,
// //   RescheduleTask,
// //   DeleteTask,
// //   HideActionButtons
// // } from '../actions';
// // // import Calendar from 'react-calendar';
// // import Calendar from 'react-calendar';
// // import Toast from './Toast';
// // var rescheduleTo;

// // class Taskitem extends Component {
// //   constructor(props) {
// //     super(props);
// //   }
// //   state = {
// //     showComponent: false,
// //     showToast: false,
// //     date: new Date(),
// //   };
// //   MyFunction = () => {
// //     var tempDate = new Date();
// //     var month = tempDate.toLocaleString('en-us', { month: 'long' }) + ' ' + tempDate.getDate();
// //     return (
// //     month
// //     );
// //     }
// // rescheduleDate = ()=>{
// //   var tempDate = new Date();
// //   var month = tempDate.toLocaleString('en-us', { month: 'long' }) + ' ' + tempDate.getDate();
// //   return (
// //   month
// //   );
// // }

// //   rescheduleTask = date => {
// //     // console.log(date.getDate());
 
// //     this.props.HideActionButtons();
// //     // rescheduleTo= this.rescheduleDate();
// //     // console.log(rescheduleTo);
// //     this.setState({ 
// //       showToast: true  ,
// //       showComponent:false,
// //       date
// //     });
// //     // return rescheduleTo;
// //   };
// //   completeTask = (tasks) => {
// //     var date1=this.MyFunction();
// //     this.props.CompletedTaskAction({tasks,date1});
// //     this.props.HideActionButtons();
// //     this.setState({ 
// //       showToast: true,
// //      });
// //   };
// //   deleteTask = (tasks,index) => {
// //     // console.log(i);
// //     this.props.DeleteTask({tasks,index});
// //     // this.props.HideActionButtons();
// //     this.setState({ 
// //       showToast: true,
      
// //      });
// //   };
// //   _onButtonClick = () => {
// //     this.props.RescheduleTask();
// //     this.setState({
// //       showComponent: true
// //     });
// //   };

// //   render() {
// //     console.log(this.props.cards);
// //    const {date}=this.state.date;

// //     return (
// //       <React.Fragment>
// //         {this.props.cards.map((tasks, index) => {
// //           // console.log(i);
// //           return (
           
// //             <div className="ItemContainer">
// //              {/* <div>{this.state.date}</div> */}
// //               <div className="StatusNoneIcon">
// //                 <img src={StatusNoneIcon} onClick={this.props.DisplayActions} />
// //               </div>
// //               <p className="taskData">{tasks.Task}</p>
// //               {this.props.Status ? (
// //                 <div className="editTaskButtons">
// //                   <img
// //                     src={this.props.data.completedTaskData.image}
// //                     onClick={()=>this.completeTask(tasks)}
// //                   />
// //                   <img
// //                     src={this.props.data.rescheduleData.image}
// //                     onClick={()=>this._onButtonClick(tasks)}
// //                   />
// //                   <img
// //                     src={this.props.data.deleteTask.image}
// //                     onClick={()=>this.deleteTask(tasks,index)}
// //                   />
// //                 </div>
// //               ) : null}
// //               {this.state.showToast ? <Toast /> : null}
// //             </div>
// //           );
// //         })}
// //          {this.state.showComponent ? (
// //                     <Calendar
// //                       className="calendar"
// //                       onChange={this.rescheduleTask}
// //                       value={date}
// //                     />
// //                   ) : null}
// //       </React.Fragment>
// //     );
// //   }
// // }
// // const myStateToProps = state => {
// //   console.log(state.allTasks);
// //   console.log(state.allTasks.Task);
// //   return {
// //     data: state.allTasks,
// //     cards: state.allTasks.Task,
// //     Status: state.allTasks.Status
// //   };
// // };

// // export default connect(
// //   myStateToProps,
// //   { DisplayActions, CompletedTaskAction, RescheduleTask, DeleteTask,HideActionButtons }
// // )(Taskitem);







// // //task.js

// // const initialValues = {
// //   Task: [
// //       {
// //           Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
// //           status: "/dashboard/Completed Tasks",
// //       },
// //       {
// //           Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch Joh to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
// //           status: "/dashboard/Rescheduled Tasks",
// //       },
// //       {
// //           Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
// //           status: "/dashboard/Completed Tasks",
// //       },
// //   ],
// //   date: '',
// //   Status: false,

// //   rescheduleData: {
// //       massage: "You have successfully rescheduled the task",
// //       image: require("../assets/Reschedule.svg"),
// //   },
// //   completedTaskData: {
// //       massage: "You have successfully completed task",
// //       image: require("../assets/Completed.svg"),
// //   },
// //   deleteTask: {
// //       image: require("../assets/Delete.svg"),
// //       massage: "You have successfully deleted task",
// //   }

// // }
// // export default (state = initialValues, action) => {
// //   var dte = new Date();
// //   switch (action.type) {
// //       case "ADD_TASK":
// //           return { ...state, Task: action.payload, date: dte }
// //       case "To_Do_All":
// //           return { ...state, }
// //       case "Display_Actions":
// //           return { ...state, Status: true };
// //           case 'HIDE_BUTTONS': return {...state,Status:false}
// //       case "RESCHEDULE_TASK":return{ ...state ,}
// //       case "COMPLETED_TASK":return{...state}
// //       case "DELETE_TASK":
// //       console.log(action.payload.index);
// //       var deletedElement = state.Task.splice(action.payload,1)
// //       return {...state}
// //       // case 'UNDO':return{...state}
// //       // default:null
// //   }
// //   return state;
// // }



// // //toast.js
// // import React, { createRef } from 'react';
// // import ReactDOM from 'react-dom';
// // import '../css/Toast.css';
// // import icon from '../assets/Toast completed.png';
// // import { connect } from 'react-redux';
// // import { UndoAction } from '../actions';
// // import CloseToast from './CloseToast';
// // import onClickOutside from 'react-onclickoutside';

// // class Toast extends React.Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.toastRef = React.createRef();
// // //   }
// //   state = {
// //     show: true
// //   };

// //   handleClickOutside = evt => {
// //     // alert("message");
// //     this.setState({ show: false });
// //   };
// //   undo = data => {
// //     console.log(data);
// //     this.props.UndoAction(data);
// //   };

// //   render() {
// //     // console.log(this.props);
// //     // console.log(this.props)
// //     return (
// //       <React.Fragment>
// //         {this.state.show ? (
// //           <div className="flex-container" id="flex-container">
// //             <div>
// //               {' '}
// //               <img src={this.props.data.image} />
// //             </div>
// //             <div className="text-display">
// //               You have successfully {this.props.data.message}
// //             </div>
// //             <div className="undo" onClick={data => this.undo(data)}>
// //               <a href="#">undo</a>
// //             </div>
// //           </div>
// //         ) : null}
// //       </React.Fragment>
// //     );
// //   }
// // }

// // const mapStateToProps = state => {
// //   // console.log(state);
// //   return {
// //     data: state.EditTask,
// //     Status: state.allTasks.Status
// //   };
// // };

// // var EnhancedComponent = onClickOutside(Toast);
// // Toast = connect(
// //   mapStateToProps,
// //   { UndoAction }
// // )(EnhancedComponent);
// // export default Toast;

// // //    document.getElementById("flex-container").style='display:none';

// // //         componentWillUnmount () {
// // //             window.Toast.removeEventListener('click', this.handleDocumentClick)
// // //           }

// // //   /* using fat arrow to bind to instance */
// // //   handleDocumentClick = (evt) => {
// // //     const area = ReactDOM.findDOMNode(this.refs.area);

// // //     if (!area.contains(evt.target)) {
// // //       onClickOutside(evt)
// // //     }
// // //   }
// // /**using refs 
// // // handleToast =()=>{
// // //     console.log(this.toastRef.current.style.display);
// // //     // const display = 
// // //     this.toastRef.current.style.display="none";
// // //     ref={this.toastRef} 
// // //     onClick ={this.handleToast} style={divStyle}

// // // const divStyle = {
  
// // //     border: '5px solid pink'
// // //   };
// // // 
// // // }

// // */





// import React, { Component } from 'react';
// import '../css/Taskitem.css';
// import { connect } from 'react-redux';
// import StatusNoneIcon from '../assets/StatusNone.svg';
// import {
//   DisplayActions,
//   CompletedTaskAction,
//   RescheduleTask,
//   DeleteTask,
//   HideActionButtons
// } from '../actions';
// // import Calendar from 'react-calendar';
// import Calendar from 'react-calendar';
// import Toast from './Toast';
// var rescheduleTo;

// class Taskitem extends Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     showComponent: false,
//     showToast: false,
//     date: "",
//     tasks1:'',
//   };
//   MyFunction = () => {
//     var tempDate = new Date();
//     var month = tempDate.toLocaleString('en-us', { month: 'long' }) + ' ' + tempDate.getDate();
//     return (
//     month
//     );
//     }


//   rescheduleTask = date => {
//     // console.log(date);
//     let day = date.getDate();
//     // console.log(day);
//     let monthNum = date.getMonth();
//     let monthArr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//     let month = monthArr[monthNum];
//     let rescheduleDate = day+" "+month;
//     // console.log(rescheduleDate);
//     // console.log("this is final date",rescheduleDate, "tasks value", this.state.tasks1);
//     this.props.RescheduleTask(rescheduleDate,this.state.tasks1);
    
//     this.setState({ 
//       showToast: true  ,
//       showComponent:false,
//       // date
//     });
    
//   };
//   completeTask = (tasks) => {
//     var date1=this.MyFunction();
//     this.props.CompletedTaskAction({tasks,date1});
//     this.props.HideActionButtons();
//     this.setState({ 
//       showToast: true,
//      });
//   };
//   deleteTask = (tasks,index) => {
//     // console.log(i);
//     this.props.DeleteTask({tasks,index});
//     this.props.HideActionButtons();
//     this.setState({ 
//       showToast: true,
      
//      });
//   };
//   _onButtonClick = (tasks) => {
//     // var date1=this.MyFunction();
    
//     this.setState({
//       showComponent: true,
//       tasks1: tasks
//     });
//   };

//   render() {
//     console.log(this.props.cards);
//    const {date}=this.state.date;

//     return (
//       <React.Fragment>
//         {this.props.cards.map((tasks, index) => {
//           // console.log(i);
//           return (
           
//             <div className="ItemContainer">
//              {/* <div>{this.state.date}</div> */}
//               <div className="StatusNoneIcon">
//                 <img src={StatusNoneIcon} onClick={this.props.DisplayActions} />
//               </div>
//               <p className="taskData">{tasks.Task}</p>
//               {this.props.Status ? (
//                 <div className="editTaskButtons">
//                   <img
//                     src={this.props.data.completedTaskData.image}
//                     onClick={()=>this.completeTask(tasks)}
//                   />
//                   <img
//                     src={this.props.data.rescheduleData.image}
//                     onClick={()=>this._onButtonClick(tasks)}
//                   />
//                   <img
//                     src={this.props.data.deleteTask.image}
//                     onClick={()=>this.deleteTask(tasks,index)}
//                   />
//                 </div>
//               ) : null}
//               {this.state.showToast ? <Toast /> : null}
//             </div>
//           );
//         })}
//          {this.state.showComponent ? (
//                     <Calendar
//                       className="calendar"
//                       onChange={this.rescheduleTask}
//                       value={date}
//                     />
//                   ) : null}
//       </React.Fragment>
//     );
//   }
// }
// const myStateToProps = state => {
//   console.log(state.allTasks);
//   console.log(state.allTasks.Task);
//   return {
//     data: state.allTasks,
//     cards: state.allTasks.Task,
//     Status: state.allTasks.Status
//   };
// };

// export default connect(
//   myStateToProps,
//   { DisplayActions, CompletedTaskAction, RescheduleTask, DeleteTask,HideActionButtons }
// )(Taskitem);
 




// this.toastRef = React.createRef();

//    document.getElementById("flex-container").style='display:none';

//         componentWillUnmount () {
//             window.Toast.removeEventListener('click', this.handleDocumentClick)
//           }

//   /* using fat arrow to bind to instance */
//   handleDocumentClick = (evt) => {
//     const area = ReactDOM.findDOMNode(this.refs.area);

//     if (!area.contains(evt.target)) {
//       onClickOutside(evt)
//     }
//   }
/**using refs 
// handleToast =()=>{
//     console.log(this.toastRef.current.style.display);
//     // const display = 
//     this.toastRef.current.style.display="none";
//     ref={this.toastRef} 
//     onClick ={this.handleToast} style={divStyle}

// const divStyle = {
  
//     border: '5px solid pink'
//   };
// 
// }

*/

//   handleClickOutside = e => {
//     // this.setState( prevState=>({
//     //   isShow: !prevState.isShow
//     //   }));
// console.log(this.props.showToast);
//     this.setState( {
//       isShow: false,

//       });

//       // console.log( this.state.isShow + "in Toast Local ");
//   };

// var EnhancedComponent = onClickOutside(Toast);
// Toast = connect(
//   mapStateToProps,
//   { UndoAction }
// )(EnhancedComponent);
// export default Toast;




 // }


 // if(this.props.isCalenderOpen){
    //   this.setState({
    //     showComponent:false
    //   })
    // }  else{
    //   this.props.manageCalender();      
    // if(this.state.showComponent){
    //   this.props.manageCalender();  
    //   this.setState({
    //     showComponent: (this.state.showComponent?false:true),

    //   })
                        
    //     }

     // if(this.props.isCalenderOpen){
    //   this.setState({
    //     showCalendar: false,
    //   })
    //   if(this.state.showCalendar){
    // this.props.manageCalender();                    
    //   }
    // }else{
    // this.props.manageCalender();




    // const EditProfileAction = (resData) => {
    //     return {
    //       type: "EDIT_PROFILE",
    //       payload: resData
    //     }
    //   }

    // case 'EDIT_PROFILE':
    // return {
    //   ...state
    // };