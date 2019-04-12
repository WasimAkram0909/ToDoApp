
const toastValues={
rescheduleData:{
    massage:"rescheduled the task",
    image:require("/home/wtt174/ToDoApp/src/assets/Reschedule.svg"),
},
completedTaskData:{
    massage:" completed task",
    image:require("/home/wtt174/ToDoApp/src/assets/Completed.svg"),
},
deleteTask:{
    image:require("/home/wtt174/ToDoApp/src/assets/Delete.svg"),
    massage:" deleted task",
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