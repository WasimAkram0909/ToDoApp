
const toastValues={
    rescheduleData:{
        message:"rescheduled the task",
        image:require("../assets/Toast Reschedule.png"),
    },
    completedTaskData:{
        message:" completed the task",
        image:require("../assets/Toast completed.png"),
    },
    deleteTask:{
        image:require("../assets/Toast Delete.png"),
        message:" deleted the task",
    }
    }
    
    export default (state = toastValues,action)=>{
        switch(action.types){
            
            case "RESCHEDULE_TOAST":return{...state.rescheduleData };break;
            case "COMPLETED_TOAST":return{...state.completedTaskData };break;
            case "DELETE_TOAST":return{...state.deleteTask };break;
        // default:null;
        }
            return state;
    }