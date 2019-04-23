import axios from "axios";
// import ToDoAxios from "../api/ToDoaxios";
// import {authToken} from '../components/googleauth'

let ToDoAxios= axios.create({
  baseURL:"http://115.248.119.138:8089/todo/",
  headers:{
  "Authorization":"ya29.Glz0BvNsib31uCTey4P0HJGNk714pQtkd6WLOwnvoIPnTWdr9F8QEb5EQHtLAwylUnttmZXeQ45W8T7YrvaTSN2QWv1kIXfffiJQMe3X2I-V0Lyjn4JhJ5R8615F3Q"
  }
  })
// const url = "http://115.248.119.138:8089/todo";
// const auth=headers{
//   "Authorization":"ya29.GlzwBvtnqixqt0LZ5spZ8bcepYvOvmptREz5LbrWL5O3uJbiDcBo2biWA4SURh3NkIPxqVkc8_Yn-Njg_mh7emG_R3tDKXjAsnvxhgQZstOt9ss78YQ6s-zHE9PgRw"
// }

// y

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
    console.log("data");
    // var url = "http://115.248.119.138:8089/todo/tasks";
    return (dispatch) => {
      return ToDoAxios.get('tasks')
        .then(res => {
          console.log(res);
          // console.log(res.data.main);
          dispatch(ToDoAllAction(res.data));
        }
        ).catch(() => {
          console.log("error");
        })
    }
  }
export const ToDoAllAction = (RES) => {
  console.log(RES);
  return {
    type: "TO_DO_ALL",
    payload: RES,
  };
};
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
          console.log(res.data);
          dispatch(GetProfile(res.data));
        })
      }
      
  }
  const GetProfile = (Profiledata)=>{
    console.log(Profiledata)
    return{
      type:"GET_PROFILE",
      payload:Profiledata
    }
  }
 
export const TasksApi = (data) => {
  console.log(data);
  var status = data.tasks.status;
  console.log(data.status);
  return (dispatch) => {
    return ToDoAxios.get(`getTasksByStatus?status=Completed`)
      .then(res => {
        console.log(res);
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

  

    export const EditProfile = (data) =>{
      console.log(data.picture);
      // var url=`http://115.248.119.138:8089/todo/profile?firstname=${data.firstname}&lastname=${data.lastname}&picture=${data.picture}&userId=${1}`
      return(dispatch)=>{
        return  ToDoAxios.post(`profile?firstname=${data.firstname}&lastname=${data.lastname}&picture=${data.picture}&userId=${11}`)
    .then(res=>{
        console.log(res);
        // dispatch(profileAction(res))
        dispatch(EditProfileAction(res.data));
    })}
  }
      const EditProfileAction = (resData)=>{
        return{
          type:"EDIT_PROFILE",
          payload:resData
        }
      }

  export const DeleteTask = (data) => {
    // console.log(data);
    // var url = (`http://115.248.119.138:8089/todo/deleteTasks/?taskId=${0}`);
    // return (dispath)=>{
    //     return axios.delete(url)
    //     .then (res =>{
    //       console.log(res)
    //       // dispatch();
    //     })
    // }
    //  console.log(data);
    return {
      type: "DELETE_TASK",
      payload:data,
    };
  };

  export const SaveTask = (data) => {
    console.log(data.taskName);
    return(dispatch)=>{
      return ToDoAxios.post(`tasks?date=${data.createDate}&name=${data.taskName}`)
  .then(res=>{
      console.log(res);
      console.log(res.data.task);
      dispatch(ToDoAll())
      // dispatch(SaveTaskAction(data));
  })
}
  }
 const SaveTaskAction = (dataid) => {
    console.log(dataid);
    return {
      type: "SAVE_TASK"
      // payload: dataid,

  }}

  export const RescheduleTask =(data)=>{
console.log(data);
    return {
      type:"RESCHEDULE_TASK",
      payload:data,
    }
  }
  export const CompletedTaskAction =(data)=>{
console.log(data);
    console.log("this action is triggerd form sidemenu");
    return {
      type:"COMPLETED_TASK",
      payload:data,
    }
  console.log(data);
  }

export const UndoAction = () => {
  return {
    type: "UNDO"
  }
}

