import axios from "axios";
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

  export const ToDoAll = () => {
    var url="http://localhost:8080/todo/tasks";
    return(dispatch)=>{
      return axios.get(url)
  .then(res=>{
      // console.log(res);
      // console.log(res.data.main);
      dispatch(ToDoAllAction(res.data.main));
  }
)
}
}
const ToDoAllAction=(RES)=>{
    return {
      type: "TO_DO_ALL"
    };
  };
  export const UpdateTask = () => {
    return {
      type: "UPDATE_TASK"
    };
  };
  export const DeleteTask = () => {
    return {
      type: "DELETE_TASK"
    };
  };
  export const AddTask = () => {
    return {
      type: "ADD_TASK"
    };
  };
  export const SaveTask = () => {
    return {
      type: "SAVE_TASK"
    };
  };
  export const SortBy = () => {
    return {
      type: "SORT_BY"
    };
  };
