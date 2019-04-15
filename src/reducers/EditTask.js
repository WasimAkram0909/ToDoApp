
const toastValues={
rescheduleData:{
    massage:"rescheduled the task",
    image:require("../assets/Reschedule.svg"),
},
completedTaskData:{
    massage:" completed the task",
    image:require("../assets/Completed.svg"),
},
deleteTask:{
    image:require("../assets/Delete.svg"),
    massage:" deleted the task",
}
}

export default (state=toastValues,actions)=>{
    switch(actions.type){
        
    case "RESCHEDULE_TASK":return{ ...state.rescheduleData };break;
    case "COMPLETED_TASK":return{...state.completedTaskData};break;
    case "DELETE_TASK":return{...state.deleteTask};break;

    // default:null;
    }
        return state;
}