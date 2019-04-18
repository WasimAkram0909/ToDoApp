const profileDetails = [];
const profile= {
    firstName:"",
    lastName:""
}


 export default (state = profileDetails, action) => {
    if (action.type === "SIGN_IN_USER_DETAILS") {
        // console.log(action.payload, "redusers");
        var copyProfile = [...state];
        return copyProfile.concat(action.payload);
    }
    if(action.type === "EDIT_PROFILE"){
        console.log(action.payload);
        return{
                    profile:{
                        firstName:action.payload.fn,
                        lastName:action.payload.ln
                    }
            
        }
    }
    return state;
}
export  const dynamicData=(state=profile,action)=>{
    if(action.types ==="EDIT_PROFILE")
    {
        console.log(action.payload, "redusers");
    }
}

