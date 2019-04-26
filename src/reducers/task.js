const sortData = [
  {
    taskName: ' let',
    status: 'pending',
    createDate: '1996-04-22',
    taskId: 0
  },
  {
    taskName: 'Remind John to call Alex on OS configuration ',
    status: 'Rescheduled',
    createDate: '2019-04-28',
    taskId: 1
  },
  {
    taskName: 'lunch',
    status: 'Rescheduled',
    createDate: '2019-07-26',
    taskId: 2
  },
  {
    taskName: ' Alex on OS configuration ',
    status: 'pending',
    createDate: '2018-04-25',
    taskId: 3
  }
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
  profile: [],
  sortDate: null
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case 'TO_DO_ALL':
      // console.log(action.payload);
      // // console.log(sortData);
      // // sortData.concat(action.payload.tasks);
      // // console.log(action.payload);
      //   return {

      //     ...state,Task: sortData.concat(action.payload)

      //     // ...state, Task: newData
      //   };
      // case 'RESCHEDULE_TASK':
      //  undoData=state.Task.splice(action.payload.index,1);
      //   let reschedulingData = state.editData && state.editData.concat(action.payload)
      //   return {
      //     ...state,
      //     // mainEditData: reschedulingData,
      //     editData: reschedulingData,
      //     Task:state.Task
      //   };
      // case 'COMPLETED_TASK':
      //   console.log(action.payload.index);
      //   undoData=state.Task.splice(action.payload.index,1);
      //   let completedData = state.editData && state.editData.concat(action.payload);
      //   return {
      //     ...state,
      //     // mainEditData: completedData,
      //     editData: completedData,
      //     Task:state.Task
      //   };
      // case 'DELETE_TASK':
      // console.log(action.payload.tasks);
      //   undoData = state.Task.splice(action.payload.index, 1);
      //   // console.log(deletedElement);
      //   // console.log(state);

      //   return {
      //     ...state
      return {
        ...state,
        Task: sortData.concat(action.payload),
        sortDate: null
      };
    // case 'DELETE_TASK':
    // console.log(action.payload.tasks);
    //   undoData = state.Task.splice(action.payload.index, 1);
    //   return {
    //     ...state
    //   };
    case 'GET_PROFILE':
      // console.log(action.payload.data);
      var newdata = [{ ...action.payload.data }];
      // console.log({...state});
      // console.log(newdata)
      return {
        ...state,
        profile: newdata
      };
    case 'EDIT_PROFILE':
      return {
        ...state
      };
    case 'SORT_BY':
    console.log(state);
      // if (action.payload.specificSort) {
        let filterDate = (action.payload.selectDate=== state.sortDate)
          ? null
          : action.payload.selectDate;
        console.log(filterDate);
        return {
          ...state,
          sortDate: filterDate
          // action.payload.selectDate
        };
      // }
      //  else {
      //   return {
      //     ...state,
      //     Task: state.Task.filter(key => {
      //       let date =
      //         key.createDate.slice(0, 4) +
      //         '-' +
      //         key.createDate.slice(5, 7) +
      //         '-' +
      //         key.createDate.slice(8, 10);
      //       // console.log(date);
      //       // console.log(action.payload.selectDate);
      //       if (
      //         action.payload.selectDate === date &&
      //         !action.payload.specificSort
      //       ) {
      //         return key;
      //       }
      //     })
      //   };
      // }
    case 'UNDO':
      // console.log(undoData);
      return {
        ...state,
        Task: state.Task.concat(undoData)
      };
  }
  return state;
};
