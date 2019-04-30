import { combineReducers } from "redux";
import allTasksReducer from './task';
import googleProfile from './profileReducer';
import authReducer from './authReducer';
export default combineReducers({
    googleData:authReducer,
    profileData:googleProfile,
    allTasks:allTasksReducer,
})