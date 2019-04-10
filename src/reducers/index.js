import { combineReducers } from "redux";
import allTasksReducer from './task';
import profileReducer from './profileReducer';
import authReducer from './authReducer';

//Combining Reducers
export default combineReducers({
    googleData:authReducer,
    profileData:profileReducer,
    allTasks:allTasksReducer
})