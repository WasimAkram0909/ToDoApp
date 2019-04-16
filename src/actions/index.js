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

  export const profileAction=(data)=>{
    console.log(data,"actions");
      var id= data.getId();
      var fullName=data.getName();
      var name= data.getGivenName();
      var familyName= data.getFamilyName();
      var image= data.getImageUrl();
      var email= data.getEmail();
      var logInData={id,fullName,name,familyName,image,email};
    return{
    type:"SIGN_IN_USER_DETAILS",
    payload:logInData,
    }
    }
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
  export const DeleteTask = (data) => {
    // var url = ("http://localhost:8080/todo/deleteTasks/{id}");
    // return (dispath)=>{
    //     return axios.delete(url)
    //     .then (res =>{
    //       dispatch();
    //     })
    // }
     console.log(data);
    return {
      type: "DELETE_TASK",
      types:"DELETE_TOAST",
      payload:data,
    };
  };
  // export const AddTask = () => {
  //   return {
  //     type: "ADD_TASK"
  //   };
  // };
  export const SaveTask = (data) => {
    // console.log(data);
    var url="http://192.168.1.167:9124/todo/tasks";
    return(dispatch)=>{
      return axios.post(url,{data})
  .then(res=>{
      console.log(res);
      // console.log(res.data.main);
      dispatch(SaveTaskAction(res.data.main));
  }
)
}
}
   const SaveTaskAction = (data) => {
    console.log(data);
    return {
      type: "SAVE_TASK",
      payload: data,

    };
  };
  export const SortBy = () => {
    return {
      type: "SORT_BY"
    };
  };
  export const DisplayActions = () => {
    console.log('hi')
    return {
      type: "Display_Actions"
    };
  };
  export const RescheduleTask =(data)=>{
console.log(data);
    return {
      type:"RESCHEDULE_TASK",
      types:"RESCHEDULE_TOAST",
      payload:data,
    }
  }
  export const CompletedTaskAction =(data)=>{
    return {
      type:"COMPLETED_TASK",
      types:"COMPLETED_TOAST",
      payload:data,
    }

  }
  export const HideActionButtons =()=>{
    return {
      type:"HIDE_BUTTONS",

    }

  }
  export const UndoAction = ()=>{
    return {
      type:"UNDO"
    }
  }