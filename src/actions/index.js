import axios from "axios";
// import ToDoAxios from "../api/ToDoaxios";
// import {authToken} from '../components/googleauth'


let ToDoAxios= axios.create({
  baseURL:"http://115.248.119.138:8089/todo/",
  headers:{
  "Authorization":"ya29.Glz0BiLoVrwXNCge94nW2r6GHjVri7p8rt8YeaHLVVn6_kShd_0kJMed_Hm2jOlUqlkLP56zFqghrxuK4YiE6IPDWTZ3v3ZHqcYb8bmeKNa-15ZQExEzB7-xl4tfjg"
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
    console.log("data");
    var url = "http://115.248.119.138:8089/todo/tasks";
    return (dispatch) => {
      return axios.get(url,
        {
          headers: {
            "Authorization": " ya29.GlzzBkLT_OQBg3wM_RqlqMR1K-jaIoE33JaP8Qr6QjHpqcBgdgl6fs-Df1DigBQvhJFyvh4l7S0q80luTQQx6KVWs0C8hJOliLBWu2fAzFvDJcXyOXYsf9-C-38rUw"
          }
        })
      .then(res => {
        console.log(res);
        // console.log(res.data.main);
        dispatch(ToDoAllAction(res.data));
      }
    ).catch(() => {
      dispatch(ToDoAllAction([]));
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
        return  ToDoAxios.get(`/profile`)
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
      var url=`http://115.248.119.138:8089/todo/profile?firstname=${data.firstname}&lastname=${data.lastname}&picture=${data.picture}&userId=${1}`
      return(dispatch)=>{
        return axios.post(url,{
          headers:{
            "Authorization":"ya29.GlzwBqAbnEuanUZXKVIG7jxtB68anv7bRxGXgOx4CdX7aE6eu9NdPUZMmoHWeVGU3ok3tSIDTMWwq5JWFpo0a6HLPKzD6ZV-C1HU9D4Gz6BQzKwbDC9sgMchpmeRwg"
          }
        })
    .then(res=>{
        console.log(res);
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
    var url=`http://115.248.119.138:8089/todo/tasks?date=10-07-2019&name=${data.taskName}`
    // var url=`http://115.248.119.138:8089/todo/tasks?name=${data.taskName}&date=${data.createDate}&userId=${1}`;
    return(dispatch)=>{
      return axios.post(url,{
        headers:{
          "Authorization":"ya29.GlzwBr8tPsT5rduF6erhifjPTHHX7oJmxOTM2o_PJ5LXqA1UbsG9qw5Ty7CAQM91YFNnrWgkBq90lYstkMJXXMW3sZVyNoD6Hq0aJYmtu36yWqzarUz9Xqb_XICuTA"
        }
      })
  .then(res=>{
      console.log(res);
      console.log(res.data.task);
      dispatch(SaveTaskAction(res.data.task));
  })
}
  }
 const SaveTaskAction = (dataid) => {
    console.log(dataid);
    return {
      type: "SAVE_TASK",
      payload: dataid,

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

