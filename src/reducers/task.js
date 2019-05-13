const pendingTasks = [];
let tasks = [];
const initialValues = {
  task: pendingTasks,
  profile: [],
  sortDate: null,
  accessToken:{}
};
export default (state = initialValues, action) => {
  switch (action.type) {
    case 'TOKEN_ACCESS':
    return Object.assign({}, state, {
      accessToken: action.payload
    })
    case 'TO_DO_ALL':
      return {
        ...state,
        task: pendingTasks.concat(action.payload),
        sortDate: null
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        updatedTasks: tasks.concat(action.payload),
        sortDate: null
      };
    case 'GET_PROFILE':
      var newdata = [{ ...action.payload.data }];
      return {
        ...state,
        profile: newdata
      };
    case 'SORT_BY':
      let filterDate =
        action.payload.selectDate === state.sortDate
          ? action.payload.selectDate
          : action.payload.selectDate;
      return {
        ...state,
        sortDate: filterDate
      };
    default:
      return state;
  }
};
