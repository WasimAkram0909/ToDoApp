import { combineReducers } from "redux";

const profileDetails=[]
const profileReducer= (state = profileDetails, action) => {
    if(action.type==="SIGN_IN_USER_DETAILS"){
       console.log(action.payload,"redusers");
       var copyProfile=[...state];
    //    console.log(copyProfile);
       return copyProfile.concat(action.payload);
    }
return state;
}
const INTIAL_STATE = {
isSignedIn: false,
userId: null
};
//setting signin using google reducer 
const googleReducer= (state = INTIAL_STATE, action) => {
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

//Combining Reducers
const exportReducer=combineReducers({
googleData:googleReducer,
profileData:profileReducer,
})
export default exportReducer