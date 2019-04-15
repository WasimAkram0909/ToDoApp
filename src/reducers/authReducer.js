// import { combineReducers } from "redux";



const INTIAL_STATE = {
isSignedIn: false,
userId: null
};
//setting signin using google reducer 
export default  (state = INTIAL_STATE, action) => {
switch (action.type) {
case "SIGN_IN":
return { ...state, isSignedIn: true, userId: action.payload };
case "SIGN_OUT":
return { ...state, isSignedIn: false, userId: null };
default:
return state;
}
return state;
};
// export default combineReducers({
//     googleData:googleReducer,
//     profileData:profileReducer
// )}