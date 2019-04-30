const pendingTasks = [];
let undoData = [];
let tasks = [];
const initialValues = {
  task: pendingTasks,
  profile: [],
  sortDate: null,
  updatedTasks: tasks,
  accessToken: ''
};
export default (state = initialValues, action) => {
  switch (action.type) {
    case 'ACCESS_TOKEN':
      return {
        ...state,
        accessToken: action.payload
      };
      break;

    case 'TO_DO_ALL':
      return {
        ...state,
        task: pendingTasks.concat(action.payload),
        sortDate: null
      };
      break;

    case 'UPDATE_TASK':
    console.log(action.payload);
      return {
        ...state,
        updatedTasks: tasks.concat(action.payload),
        sortDate: null
      };
      break;

    case 'GET_PROFILE':
      var newdata = [{ ...action.payload.data }];
      return {
        ...state,
        profile: newdata
      };
      break;

    case 'EDIT_PROFILE':
      return {
        ...state
      };
      break;

    case 'SORT_BY':
      let filterDate =
        action.payload.selectDate === state.sortDate
          ? null
          : action.payload.selectDate;
      return {
        ...state,
        sortDate: filterDate
      };
      break;

    case 'UNDO':
      return {
        ...state,
        Task: state.Task.concat(undoData)
      };
      break;
    default:
      return state;
      break;
  }
};
