const sortData = [
  {
    taskName: ' let',
    status: 'Completed',
    createDate: '2019-04-24',
    taskId: 0
  },
  {
    taskName: 'Remind John to call Alex on OS configuration ',
    status: 'Rescheduled',
    createDate: '2019-04-24',
    taskId: 1
  },
  {
    taskName: 'lunch',
    status: 'Rescheduled',
    createDate: '2019-04-24',
    taskId: 2
  },
  {
    taskName: ' Alex on OS configuration ',
    status: 'Rescheduled',
    createDate: '2019-04-25',
    taskId: 3
  },
  // {
  //   taskName: ' Alex on OS configuration and let him know that meeting JA Marsh for lunch Joh to call Alex on OS configuration and let him know that meeting JA Marsh for lunch',
  //   status: 'Rescheduled',
  //   createDate: '2019-04-25',
  //   taskId: 4
  // },
]
let undoData = [];
const initialValues = {
  Task: sortData,
  editData: [],
  // mainEditData: [],
  profile:[],
  sortDate: null
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
    // sortData.concat(action.payload.tasks);
      return {
      
        ...state,Task: sortData.concat(action.payload)
        // ...state, Task: newData
      };
    case 'RESCHEDULE_TASK':
     undoData=state.Task.splice(action.payload.index,1);
      let reschedulingData = state.editData && state.editData.concat(action.payload)
      return {
        ...state,
        // mainEditData: reschedulingData,
        editData: reschedulingData,
        Task:state.Task
      };
    case 'COMPLETED_TASK':
      console.log(action.payload.index);
      undoData=state.Task.splice(action.payload.index,1);
      let completedData = state.editData && state.editData.concat(action.payload);
      return {
        ...state,
        // mainEditData: completedData,
        editData: completedData,
        Task:state.Task
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
        console.log(action.payload.data);
        var newdata=[{...action.payload.data}];
        console.log({...state});
        console.log(newdata)
      //   for (var key in  newdata) {
      //     if (newdata.hasOwnProperty(key)) {
      //         if (newdata[key] == null) {
      //           return  newdata[key] = newdata[key]
      //         }
      //     }
      //  }
        // if(){
        // }
        return{
          ...state,
          //  profile:state.profile.concat(action.payload.data),
           profile:newdata
          }
          // console.log(state.profile);
    case 'EDIT_PROFILE':
      // console.log(action.payload);
      return {
         ...state
        //  profile:state.profile.action.payload
      
  }
    case 'SORT_BY':
      // if (action.payload.specificSort) {
      //   return ({
      //     ...state,
      //     editData: state.mainEditData.filter(key => {
      //       console.log(key);            
      //       let date=key.tasks.createDate.slice(0,4)+"-"+ key.tasks.createDate.slice(5,7)+"-"+ key.tasks.createDate.slice(8,10);
      //       console.log(date);            
            
      //       if (action.payload.selectDate === date) {
      //         console.log(key);
      //         return key;
      //       }
      //     })
      //   })
      // }
      
      if (action.payload.specificSort){

        let filterDate = action.payload.selectDate

        return {
          ...state , sortDate :state.sortDate=filterDate
        }

      }

      else{
      return {
        ...state,
        Task: state.Task.filter(key => {
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
