const initialValues = {
    Task: [
        {
            taskName: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "",
            createDate:'2019-02-20'
        },
        {
            taskName: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch Joh to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "",
            createDate:'2018-01-15'
            
        },
        {
            taskName: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "",
            createDate:'2018-12-15'
            
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
        case "TO_DO_ALL":
        console.log(action.payload);
            return { ...state,Task:state.Task.concat(action.payload) }
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
          case "EDIT_PROFILE":
        console.log(action.payload);
        return {
            profile:{
                firstName:action.payload.fn,
                lastName:action.payload.ln
            }
        };
    }
    return state;
}

