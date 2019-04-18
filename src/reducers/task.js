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

}
export default (state = initialValues, action) => {
    // var dte = new Date();
    switch (action.type) {
        case "SAVE_TASK":
        console.log(action.payload);
            return { ...state, Task:state.Task.concat(action.payload) }
        case "To_Do_All":
            return { ...state, }
        case "Display_Actions":
            return { ...state, Status: true };
        case 'HIDE_BUTTONS': return { ...state, Status: false }
        case "RESCHEDULE_TASK":
            // console.log(action.payload.tasks.status);
            // action.payload.tasks.status="RescheduledTasks";
            return { ...state, editData: state.editData.concat(action.payload) }
        case "COMPLETED_TASK": return { ...state, editData: state.editData.concat(action.payload) }
        case "DELETE_TASK":
            console.log(action.payload.index);
            var deletedElement = state.Task.splice(action.payload, 1)
            return { ...state }
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