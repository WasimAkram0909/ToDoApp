const initialValues = {
    Task: [
        {
            Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "",
        },
        {
            Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch Joh to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "",
        },
        {
            Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "",
        }, 
    ],
    editData: [],
    // rescheduleData: [],
    date: '',
    Status: false,
    // showToast: false,

    rescheduleData1: {
        massage: "You have successfully rescheduled the task",
        image: require("../assets/Reschedule.svg"),
    },
    completedTaskData: {
        massage: "You have successfully completed task",
        // image: require("../assets/Completed."),
    },
    deleteTask: {
        image: require("../assets/Delete.svg"),
        massage: "You have successfully deleted task",
    }

}
export default (state = initialValues, action) => {
    // var dte = new Date();
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, Task: action.payload,}
        case "To_Do_All":
            return { ...state, }
        case "Display_Actions":
            return { ...state, Status: true };
            case 'HIDE_BUTTONS': return {...state,Status:false}
        case "RESCHEDULE_TASK": 
        // console.log(action.payload.tasks.status);
            
                    // action.payload.tasks.status="RescheduledTasks";
        return{ ...state, editData: state.editData.concat(action.payload)}
        case "COMPLETED_TASK":return{ ...state, editData: state.editData.concat(action.payload)}
        case "DELETE_TASK":
        console.log(action.payload.index);
        var deletedElement = state.Task.splice(action.payload,1)
        return {...state}
        // case 'UNDO':return{...state}
        // default:null
    }
    return state;
}

