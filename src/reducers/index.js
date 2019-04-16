import { combineReducers } from "redux";
import allTasksReducer from './task';
import profileReducer from './profileReducer';
import authReducer from './authReducer';
import EditTask from './EditTask';
import TaskReducer from "./taskReducer";
export default combineReducers({
    googleData:authReducer,
    profileData:profileReducer,
    allTasks:allTasksReducer,
    EditTask:EditTask,
    complete:TaskReducer,
})