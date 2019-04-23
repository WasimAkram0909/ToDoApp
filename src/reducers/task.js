const sortData = [
  {
    taskName: ' let him know that meeting JA Marsh for lunch',
    status: 'Completed',
    createDate: '2019-04-20',
    taskId: 0
  },
  {
    taskName: 'Remind John to call Alex on OS configuration ',
    status: 'Rescheduled',
    createDate: '2019-04-25',
    taskId: 1
  },
  {
    taskName: 'Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch',
    status: 'Completed',
    createDate: '2019-04-20',
    taskId: 2
  },
  {
    taskName: ' Alex on OS configuration and let him know that meeting JA Marsh for lunch Joh to call Alex on OS configuration and let him know that meeting JA Marsh for lunch',
    status: 'Rescheduled',
    createDate: '2019-04-25',
    taskId: 3
  },
]
const initialValues = {
  Task: sortData,
  editData: [],
  date: '',
  sortedData: [],
  mainEditData: [],
  profile:[]
  
};
export default (state = initialValues, action) => {
  switch (action.type) {
    case 'SAVE_TASK':
      return {
         ...state, Task:state.Task.concat(action.payload)
      };
    case 'TO_DO_ALL':
    console.log(action.payload);
    // console.log(sortData);
    sortData.concat(action.payload.tasks);
    // console.log(apiData);
      return {
      
        ...state,Task: sortData.concat(action.payload.tasks)
      };
    case 'Display_Actions':
      return {
        ...state,
        Status: true
      };
    case 'RESCHEDULE_TASK':
    var reschedule=state.Task.splice(action.payload.tasks.parentId,1);
      let formData = state.editData && state.editData.concat(action.payload)
      return {
        ...state,
        mainEditData: formData,
        editData: formData,
        Task:state.Task
      };
    case 'COMPLETED_TASK':

      let completed=state.Task.splice(action.payload.tasks.parentId,1);
      let formData2 = state.mainEditData && state.mainEditData.concat(action.payload)
      return {
        ...state,
        mainEditData: formData2,
        editData: formData2,
        Task:state.Task
      };
    case 'DELETE_TASK':
    // console.log(action.payload);
      var deletedElement = state.Task.splice(action.payload.tasks.parentId, 1);
      return {
        ...state
      };
      case "GET_PROFILE":
        // console.log(action.payload);
        return{
          ...state, profile:state.profile.concat(action.payload)}
    case 'EDIT_PROFILE':
      // console.log(action.payload);
      return {
         ...state,profile:state.profile.action.payload
      
  }
    case 'SORT_BY':
      // console.log(state.Task);
      // console.log(action.payload.selectDate);
      if (action.payload.specificSort) {
        return ({
          ...state,
          editData: state.mainEditData.filter(key => {
            // console.log(key.createDate);            
            let date=key.createDate.slice(0,4)+"-"+ key.createDate.slice(5,7)+"-"+ key.createDate.slice(8,10);
            // console.log(date);
            if (action.payload.selectDate === date) {
              // console.log(key);
              return key;
            }
          })
        })
      }else{
      return {
        ...state,
        Task: state.Task.filter(key => {
          // console.log(key.createDate);            
          let date=key.createDate.slice(0,4)+"-"+ key.createDate.slice(5,7)+"-"+ key.createDate.slice(8,10);
          console.log(date);
          console.log(action.payload.selectDate);
          
          if (action.payload.selectDate === date && !action.payload.specificSort) {
            console.log(key);
            return key;
          }
        })
      }
    }
    case 'UNDO':
      return {
        ...state
      };
    }
    return state;
  };
