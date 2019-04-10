//Action Creators

export const signIn = (userId) => {
    return {
      type: "SIGN_IN",
      payload: userId
    };
  };
  
  export const signOut = () => {
    return {
      type: "SIGN_OUT"
    };
  };
  export const profileAction=(data)=>{
    console.log(data,"actions");
    return{
      type:"SIGN_IN_USER_DETAILS",
      payload:data,
    }
  }