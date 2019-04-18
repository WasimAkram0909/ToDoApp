import axios from "axios";
//Action Creators
// export const ADD_TODO = 'ADD_TODO'


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
    // console.log(data,"actions");
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
  export const ToDoAll = (data) => {
    var url=`http://115.248.119.138:8089/todo/getTasks/
    `;
    return(dispatch)=>{
      return axios.get(url)
  .then(res=>{
      console.log(res);
      console.log(res.data.main);
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
    console.log(data);
    var url = (`http://192.168.1.207:8089/todo/deleteTasks/?taskId=${0}`);
    return (dispath)=>{
        return axios.delete(url)
        .then (res =>{
          console.log(res)
          // dispatch();
        })
    }
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
    console.log(data.Task);
    var url=`http://115.248.119.138:8089/todo/tasks?name=${data.Task}&date=${data.date}&userId=${1}`;
    return(dispatch)=>{
      return axios.post(url)
  .then(res=>{
      console.log(res);
      console.log(res.data.task);
      dispatch(SaveTaskAction(res.data.task));
  }
)
}
}
   const SaveTaskAction = (dataid) => {
    console.log(dataid);
    return {
      type: "SAVE_TASK",
      payload: dataid,

    };
  };
  export const TasksApi=(data)=>{
    console.log(data.tasks.status);
    var status=data.tasks.status;
    console.log(data.status);
    var url=`http://115.248.119.138:8089/todo/getTasksByStatus?status=completed`;
    return(dispatch)=>{
      return axios.get(url)
  .then(res=>{
      console.log(res);
      // console.log(res.data.main);
  // export const CompletedTaskAction =(data)=>{
    dispatch(CompletedTaskAction(res.data));
  }
)
}


  }
  export const SortBy = () => {
    return {
      type: "SORT_BY"
    };
  };
  export const DisplayActions = (i) => {
    // console.log(i);
    return {
      type: "Display_Actions",
      payload:i,
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
console.log(data);
    
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
  export const EditProfile = (data) =>{
    console.log(data);
    return{
      type:"EDIT_PROFILE",
      payload:data
    }
  }