const initialValues = {
    Task: [
        {
            Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "CompletedTasks",
        },
        {
            Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch Joh to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "RescheduledTasks",
        },
        {
            Task: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "CompletedTasks",
        },
    ],
    date: '',
    Status: false,

    rescheduleData: {
        massage: "You have successfully rescheduled the task",
        image: require("../assets/Reschedule.svg"),
    },
    completedTaskData: {
        massage: "You have successfully completed task",
        image: require("../assets/Completed.svg"),
    },
    deleteTask: {
        image: require("../assets/Delete.svg"),
        massage: "You have successfully deleted task",
    }

}
export default (state = initialValues, action) => {
    var dte = new Date();
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, Task: action.payload, date: dte }
        case "To_Do_All":
            return { ...state, }
        case "Display_Actions":
            return { ...state, Status: true };
        // case "RESCHEDULE_TASK":return{ ...state }
        // case "COMPLETED_TASK":return{...state}
        // case "DELETE_TASK":return{...state}
        // case 'UNDO':return{...state}
        // default:null
    }
    return state;
}

