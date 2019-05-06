const profileDetails = [];
 export default (state = profileDetails, action) => {
    if (action.type === "SIGN_IN_USER_DETAILS") {
        console.log(action.payload);
        var copyProfile = [...state];
        return copyProfile.concat(action.payload);
    }
    return state;
}


