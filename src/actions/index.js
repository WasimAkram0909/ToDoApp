import axios from "axios";
// import ToDoAxios from "../api/ToDoaxios";
// import {authToken} from '../components/googleauth'

let ToDoAxios= axios.create({
  baseURL:"http://115.248.119.138:8089/todo/",
  headers:{
  "Authorization":"ya29.Glz1BprMI4vDYCLKG5ACJaK1WlbWA0aJZYri6xeI9MUTpdPEzugz0t3Vixizny8-nbOMZW2P3QJwGhK6m05P54r4z1xDwkz0p21A1tbHK-zkYiR6XBW3hbnt3v3FgA"
  }
  })
//Action Creators
export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

// export const profileAction = (data) => {
//   // console.log(data,"actions");
//   var id = data.getId();
//   var fullName = data.getName();
//   var name = data.getGivenName();
//   var familyName = data.getFamilyName();
//   var image = data.getImageUrl();
//   var email = data.getEmail();
//   var logInData = { id, fullName, name, familyName, image, email };
//   return {
//     type: "SIGN_IN_USER_DETAILS",
//     payload: logInData,
//   }
// }

  export const ToDoAll = () => {
    console.log("im todo action");
    // var url = "http://115.248.119.138:8089/todo/tasks";
    return (dispatch) => {
      return ToDoAxios.get('getTasksByStatus?status=Pending')
        .then(res => {
          console.log(res);
          // console.log(res.data.main);
          dispatch(ToDoAllAction(res.data.tasks));
        }
        ).catch(() => {
          console.log("error");
        })
    }
  }
export const ToDoAllAction = (RES) => {
  // console.log(RES);
  return {
    type: "TO_DO_ALL",
    payload: RES,
  };
};

export const SaveTask = (data) => {
  console.log(data);
  return(dispatch)=>{
    return ToDoAxios.post(`tasks?date=${data.createDate}&name=${data.taskName}`)
.then(res=>{
    console.log(res);
    console.log(res.data.task);
    // dispatch(ToDoAll())
    dispatch(SaveTaskAction(res));
})
}
}
const SaveTaskAction = (dataid) => {
  console.log(dataid);
  return {
    type: "SAVE_TASK"
    // payload: dataid,

}}

export const UpdateTask = () => {
  return {
    type: "UPDATE_TASK"
  };
};

 export const profileAction =() =>{
      // var url=`http://115.248.119.138:8089/todo/profile`;
      return(dispatch)=>{
        return  ToDoAxios.get(`profile`)
        .then(res=>{
          console.log(res);
          dispatch(GetProfile(res.data));
        })
      }
      
  }
  const GetProfile = (Profiledata)=>{
    // console.log(Profiledata)
    return{
      type:"GET_PROFILE",
      payload:Profiledata
    }
  }
  export const EditProfile = (data) =>{
    // console.log(data.picture);
    // var url=`http://115.248.119.138:8089/todo/profile?firstname=${data.firstname}&lastname=${data.lastname}&picture=${data.picture}&userId=${1}`
    return(dispatch)=>{
      return  ToDoAxios.post(`profile?firstname=${data.firstname}&lastname=${data.lastname}&picture=${data.picture}&userId=${11}`)
  .then(res=>{
      // console.log(res);
      dispatch(profileAction(data))
      // dispatch(EditProfileAction(res.data));
  })}
}
    const EditProfileAction = (resData)=>{
      return{
        type:"EDIT_PROFILE",
        payload:resData
      }
    }
 
export const TasksApi = (data) => {
  // console.log(data);
  var status = data.tasks.status;
  // console.log(data.status);
  return (dispatch) => {
    return ToDoAxios.get(`getTasksByStatus?status=Completed`)
      .then(res => {
        // console.log(res);
        // console.log(res.data.main);
        // export const CompletedTaskAction =(data)=>{
        dispatch(CompletedTaskAction(res.data));
      }
    )
  }
}
export const SortByAction = (data) => {
  return {
    type: "SORT_BY",
    payload: data,
  };
}

  

export const DeleteTask = (data) => {
  // console.log(data);
  // return (dispatch) => {
  // return ToDoAxios.delete(`tasks/${data.tasks}`)
  // .then(res => {
  // console.log(res);
  // dispatch(DeleteAction(res));
  // })
  // }
  // }
  // const DeleteAction = (data) => {
  console.log(data);
  return {
  type: "DELETE_TASK",
  payload: data,
  };
  };
  // export const DeleteTask = (data) => {
  //   // console.log(data);
  //   // var url = (`http://115.248.119.138:8089/todo/deleteTasks/?taskId=${0}`);
  //   // return (dispath)=>{
  //   //     return axios.delete(url)
  //   //     .then (res =>{
  //   //       console.log(res)
  //   //       // dispatch();
  //   //     })
  //   // }
  //   //  console.log(data);
  //   return {
  //     type: "DELETE_TASK",
  //     payload:data,
  //   };
  // };


  export const RescheduleTask =(data)=>{
console.log("triggering...revvkmlk");
    
console.log(data);
    return {
      type:"RESCHEDULE_TASK",
      payload:data,
    }
  }
  export const CompletedTaskAction =(data)=>{
console.log("triggering...");
console.log(data);

    console.log("this action is triggerd form sidemenu");
    return {
      type:"COMPLETED_TASK",
      payload:data,
    }
  console.log(data);
  }


export const UndoAction = (data) => {
  return {
    type: "UNDO",
    payload:data
  }
}

