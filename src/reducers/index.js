import { combineReducers } from "redux";
import allTasksReducer from './task';
import googleProfile from './profileReducer';
import authReducer from './authReducer';
import EditTask from './EditTask';
import TaskReducer from "./taskReducer";
export default combineReducers({
    googleData:authReducer,
    profileData:googleProfile,
    allTasks:allTasksReducer,
})