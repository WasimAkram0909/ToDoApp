
const INTIAL_STATE = {
// isSignedIn: false,
userId: null,
};
//setting signin using google reducer 
export default  (state = INTIAL_STATE, action) => {
switch (action.type) {
case "SIGN_IN":
return { ...state,  userId: action.payload.userId};
case "SIGN_OUT":
return { ...state,  userId: null};
default:
}
return state;
};
