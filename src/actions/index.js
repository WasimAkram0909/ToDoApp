import axios from "axios";
// import ToDoAxios from "../api/ToDoaxios";
// import {authToken} from '../components/googleauth'

let ToDoAxios= axios.create({
  baseURL:"http://115.248.119.138:8089/todo/",
  headers:{
  "Authorization":"ya29.Glz2Bq9MEFxPfc_c0qFpbrTopIZQk9vClTpfsV7LMPbtzuc6pBlLPA9U0Pf1aggf65zMwpkzUcCVrNBkl1VlAmxmJcRjSARwSfd6dfrcUKEvmzXmIVWomWHSzlqHtg"
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
//   var familyNaya29.Glz2BsFP1ssbml3vEsIi_cUXm0959jrvRUGErtH8IuruK60jCqeH2em9J_QhSMMdfWuEoCRh50tSBYTQAEVXvbdSK1jHyzaDa3g9Z1SaRD3o__KWMv2DsY60c0wAtgme = data.getFamilyName();
//   var image = data.getImageUrl();
//   var email = data.getEmail();
//   var logInData = { id, fullName, name, familyName, image, email };
//   return {
//     type: "SIGN_IN_USER_DETAILS",
//     payload: logInData,
//   }
// }

  export const ToDoAll = () => {
    // console.log("im todo action");
    // var url = "http://115.248.119.138:8089/todo/tasks";
    return (dispatch) => {
      return ToDoAxios.get(`tasks`)
        .then(res => {
          // console.log(res.data.tasks);
          res.data.tasks.map((data)=>{
            // console.log(data);
          if(data.status==="PENDING")
          { console.log(data);
            // console.log("jf");
            dispatch(ToDoAllAction(res.data.tasks));
          } 
        }
        )
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
  // console.log(data);
  return(dispatch)=>{
    return ToDoAxios.post(`tasks?date=${data.createDate}&name=${data.taskName}`)
.then(res=>{
    dispatch(ToDoAll());
})
}
}
const SaveTaskAction = (dataid) => {
  // console.log(dataid);
  return {
    type: "SAVE_TASK",
    payload: dataid,

}}
export const UpdateTask = (data) => {
  // console.log(data);
  return(dispatch)=>{
    return  ToDoAxios.post(`tasks/${data.tasks.taskId}?date=${data.tasks.createDate}&name=${data.tasks.taskName}
    &status=${data.tasks.status}`)
    .then(res=>{
      // console.log(res);
    

    })
  }
};

 export const profileAction =() =>{
      return(dispatch)=>{
        return  ToDoAxios.get(`profile`)
        .then(res=>{
          // console.log(res);
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
  return (dispatch) => {
    return ToDoAxios.get(`getTasksByStatus?status=${data.tasks.status}`)
      .then(res => {
          dispatch(ToDoAll());
      }
    )
  }
}

export const RescheduleTaskAction =(data)=>{
  console.log("this action is triggerd form sidemenu");
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
    }
export const SortByAction = (data) => {
// console.log(data)

  return {
    type: "SORT_BY",
    payload: data,
  };
} 
export const DeleteTask = (data) => {
  console.log(data.taskId);
  
  return (dispatch) => {
  return ToDoAxios.delete(`tasks/${data.tasks.taskId}`)
  .then(res => {
  console.log(res);
  // dispatch(DeleteAction(data));
  })
  }
  }
  // const DeleteAction = (data) => {
  // console.log(data);
  // return {
  // type: "DELETE_TASK",
  // payload: data,
  // };
  // };



export const UndoAction = (data) => {
  return {
    type: "UNDO",
    payload:data
  }
}

