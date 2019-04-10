const profileDetails=[]

export default (state = profileDetails, action) => {
    if(action.type==="SIGN_IN_USER_DETAILS"){
       console.log(action.payload,"redusers");
       var copyProfile=[...state];
    //    console.log(copyProfile);
       return copyProfile.concat(action.payload);
    }
return state;
}