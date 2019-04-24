const sortData = [
  {
    taskName: ' let',
    status: 'Completed',
    createDate: '2019-04-19',
    taskId: 0
  },
  {
    taskName: 'Remind John to call Alex on OS configuration ',
    status: 'Rescheduled',
    createDate: '2019-04-18',
    taskId: 1
  },
  {
    taskName: 'lunch',
    status: 'Completed',
    createDate: '2019-04-20',
    taskId: 2
  },
  {
    taskName: ' Alex on OS configuration ',
    status: 'Rescheduled',
    createDate: '2019-04-25',
    taskId: 3
  },
]
let undoData = [];

const initialValues = {
  Task: [],
  editData: [],
  mainEditData: [],
  profile:[]
}


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
    var newData = [...action.payload.tasks]
    console.log(newData);
    // console.log(apiData);
      return {
      
        // ...state,Task: sortData.concat(action.payload.tasks)
        ...state, Task: newData
      };
    case 'RESCHEDULE_TASK':
     undoData=state.Task.splice(action.payload.index,1);

      let reschedulingData = state.mainEditData && state.mainEditData.concat(action.payload)
      return {
        ...state,
        mainEditData: reschedulingData,
        editData: reschedulingData,
        // Task:state.Task
      };
    case 'COMPLETED_TASK':

      undoData=state.Task.splice(action.payload.index,1);
      let completedData = state.mainEditData && state.mainEditData.concat(action.payload)
      return {
        ...state,
        mainEditData: completedData,
        editData: completedData,
        // Task:state.Task
      };
    case 'DELETE_TASK':
    console.log(action.payload.tasks);
      undoData = state.Task.splice(action.payload.index, 1);
      // console.log(deletedElement);
      // console.log(state);
      

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
    console.log(undoData);
      return {
        ...state , Task: state.Task.concat(undoData),
      };
    }
    return state;
  };
