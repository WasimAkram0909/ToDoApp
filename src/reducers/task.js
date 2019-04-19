const initialValues = {
    Task: [
        {
            taskName: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "",
            createDate:'2019-02-20',
            parentId:0
        },
        {
            taskName: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch Joh to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "",
            createDate:'2018-01-15',
            parentId:1
            
        },
        {
            taskName: "Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
            status: "",
            createDate:'2018-12-15',
            parentId:2
            
        }, 
    ],
    editData: [],
    date: '',
    Status: false,


}
export default (state = initialValues, action) => {
    switch (action.type) {
        
        case "ADD_TASK":
            return { ...state, Task: action.payload,}
        case "To_Do_All":
            return { ...state, }
        case "Display_Actions":
            return { ...state, Status: true };
        case 'HIDE_BUTTONS': 
            return {...state,Status:false}
        case "RESCHEDULE_TASK": 
            return{ ...state, editData: state.editData.concat(action.payload)}
        case "COMPLETED_TASK":
            return{ ...state, editData: state.editData.concat(action.payload)}
        case "DELETE_TASK":
        var deletedElement = state.Task.splice(action.payload,1)
        return {...state}
          case "EDIT_PROFILE":
        console.log(action.payload);
        return {
            profile:{
                firstName:action.payload.fn,
                lastName:action.payload.ln
            }
        };
        case 'UNDO':
            return{...state}
    }
    return state;
}

