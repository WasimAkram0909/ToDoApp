import { combineReducers } from "redux";

const profileDetails=[]
const profileReducer= (state = profileDetails, action) => {
    if(action.type==="SIGN_IN_USER_DETAILS"){
       console.log(action.payload,"redusers");
       var copyProfile=[...state];
       console.log(copyProfile);
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

const intial_values =[
    {
        Task:"Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
    },
    {
        Task:"Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch",
    }
]
const All_Tasks_Reducer = (state=intial_values,action) => {
    console.log(action.type);
    if(action.type=="TO_DO_ALL"){
        console.log('action');
        return state;
    }
    return state;

}

const initialValues ={
    Task:'',
    date:'',
    Status:'null'
}
const To_D0_Tasks = (state=initialValues,action) => {
    var dte=new Date();
    // console.log()

    switch(action.type){
        case "ADD_TASK":
        return{...state,Task:action.payload,date:dte}
        // if( ){
        // }
    }
}

//Combining Reducers
const exportReducer=combineReducers({
googleData:googleReducer,
profileData:profileReducer,
})
export default exportReducer