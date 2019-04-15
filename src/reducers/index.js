import { combineReducers } from "redux";
import allTasksReducer from './task';
import profileReducer from './profileReducer';
import authReducer from './authReducer';
import EditTask from './EditTask';
import SideMenuReducer from './SideMenu';
// import completedTask from "./completedTask.js";
// import rescheduleTask from "./completedTask.js";
//Combining Reducers
export default combineReducers({
    googleData:authReducer,
    profileData:profileReducer,
    allTasks:allTasksReducer,
    EditTask:EditTask,
    SideMenuReducer:SideMenuReducer,

    // complete:completedTask,
    // reschedule:rescheduleTask,
})