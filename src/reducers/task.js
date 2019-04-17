const initialValues = {
    Task: [
        {
            Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "CompletedTasks",
            date: ' 01 Apr ',
        },
        {
            Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch Joh to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "RescheduledTasks",
            date: ' 01 Apr ',
            
        },
        {
            Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "CompletedTasks",
            date: ' Apr 10 ',
            Status: false,
            
        },
    ],
    editData: [],
    // rescheduleData: [],
    date: '',
    Status: false,
    // showToast: false,

    rescheduleData: {
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
    console.log(state, "reducer state");
    switch (action.type) {
        case "SAVE_TASK":
            return { ...state, Task:state.Task.concat(action.payload) }

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

