const sortData = [
  {
    taskName: ' let him know that meeting JA Marsh for lunch',
    status: 'Completed',
    createDate: '2019-04-20',
    parentId: 0
  },
  {
    taskName: 'Remind John to call Alex on OS configuration ',
    status: 'Rescheduled',
    createDate: '2019-04-25',
    parentId: 1
  },
  {
    taskName: 'Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch',
    status: 'Completed',
    createDate: '2019-04-20',
    parentId: 2
  },
  {
    taskName: ' Alex on OS configuration and let him know that meeting JA Marsh for lunch Joh to call Alex on OS configuration and let him know that meeting JA Marsh for lunch',
    status: 'Rescheduled',
    createDate: '2019-04-25',
    parentId: 3
  },
]

const initialValues = {
  Task: sortData,
  editData: [],
  date: '',
  sortedData: [],
  mainEditData: []
};
export default (state = initialValues, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        Task: action.payload
      };
    case 'TO_DO_ALL':
      debugger;
      return {
        ...state,
        Task: sortData
      };
    case 'Display_Actions':
      return {
        ...state,
        Status: true
      };
    case 'HIDE_BUTTONS':
      return {
        ...state,
        Status: false
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
    console.log(action.payload);
      var deletedElement = state.Task.splice(action.payload.tasks.parentId, 1);
      return {
        ...state
      };
    case 'EDIT_PROFILE':
      console.log(action.payload);
      return {
        profile: {
          firstName: action.payload.fn,
          lastName: action.payload.ln
        }
      };
    case 'SORT_BY':

      // console.log(action.payload);
      if (action.payload.specificSort) {
        return ({
          ...state,
          editData: state.mainEditData.filter(key => {
            if (action.payload.selectDate === key.date) {
              // console.log(key);
              return key;
            }
          })
        })
      } else {
        return {
          ...state,
          Task: sortData.filter(key => {
            if (action.payload.selectDate === key.createDate && !action.payload.specificSort) {
              // console.log(key);
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
