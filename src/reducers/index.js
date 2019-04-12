import { combineReducers } from "redux";
import allTasksReducer from './task';
import profileReducer from './profileReducer';
import authReducer from './authReducer';
// import completedTask from "./completedTask.js";
// import rescheduleTask from "./completedTask.js";
//Combining Reducers
export default combineReducers({
    googleData:authReducer,
    profileData:profileReducer,
    allTasks:allTasksReducer,
    // complete:completedTask,
    // reschedule:rescheduleTask,
})