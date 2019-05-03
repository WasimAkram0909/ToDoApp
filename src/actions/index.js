import axios from "axios";

 
let token=JSON.parse(localStorage.getItem('accessToken'));
console.log(token);
if(token===null){
  token={
    accessToken:null
  }
}
var head={
  // "Content-Type": "multipart/form-data",
  "Authorization":token
  // "ya29.Glz-Blo8Q2aALB75_B1XE4WATVYf1RUlDXTT9EIUeR_02U-a1bKkySyfbYBEP1umceMAGoclsG_0HqIAa5-_SelHXI2zPQ_xt-KgvjoVd284hgW10-4zkBoNDnZKMA",
}  
let ToDoAxios= axios.create(
  {
  baseURL:"http://192.168.1.178:8089/todo/",
  "headers":head
}
)
export const userProfile=(data)=>{
 
  var image= data.getImageUrl();
  var name= data.getGivenName();
  return{
    type:"SIGN_IN_USER_DETAILS",
    payload:{image,name},
    }
}


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
export const ToDoAll = (data) => {
  return (dispatch) => {
    return ToDoAxios.get(`tasks`)
      .then(res => {
        var pendingData = res.data.tasks.filter((taskData) => {
          if (taskData.status === "PENDING") {
            return taskData
          }
        });
dispatch(ToDoAllAction(pendingData));
      }
      )
  }
}
export const ToDoAllAction = (pendingData) => {
  return {
    type: "TO_DO_ALL",
    payload: pendingData,
  };
};
export const SaveTask = (data) => {
  return (dispatch) => {
    return ToDoAxios.post(`tasks?date=${data.createDate}&name=${data.taskName}`)
      .then(res => {
        dispatch(ToDoAll());
      })
  }
}
const SaveTaskAction = (taskId) => {
  return {
    type: "SAVE_TASK",
    payload: taskId,
  }
}
export const UpdateTask = (data) => {
  return (dispatch) => {
    return ToDoAxios.post(`tasks/${data.tasks.taskId}?date=${data.tasks.createDate}&name=${data.tasks.taskName}
    &status=${data.tasks.status}`)
      .then(res => {
        dispatch(ToDoAll());
      })
  }
};

export const profileAction = () => {
  return (dispatch) => {
    return ToDoAxios.get(`profile`)
      .then(res => {
        console.log(res.data);
        dispatch(GetProfile(res.data));
      })
  }
}
const GetProfile = (Profiledata) => {
  return {
    type: "GET_PROFILE",
    payload: Profiledata
  }
}
export const EditProfile = (data) => {
  console.log(data.picture);
  return (dispatch) => {
return ToDoAxios.post(`profile?firstName=${data.firstname}&lastName=${data.lastname}&picture=${data.picture}`)
      .then(res => {
        console.log(res);
        dispatch(EditProfileAction(res.data));
      })
  }
}
const EditProfileAction = (resData) => {
  return {
    type: "EDIT_PROFILE",
    payload: resData
  }
}

export const TasksApi = (status) => {
  return (dispatch) => {
    return ToDoAxios.get(`getTasksByStatus?status=${status}`)
      .then(res => {
        dispatch(TaskAction(res.data.tasks));
      }
      )
  }
}

export const TaskAction = (data) => {
  return {
    type: "UPDATE_TASK",
    payload: data,
  }
}
export const SortByAction = (data) => {
  return {
    type: "SORT_BY",
    payload: data,
  };
}
export const DeleteTask = (data) => {
  return (dispatch) => {
    return ToDoAxios.delete(`tasks/${data.tasks.taskId}`)
      .then(res => {
        dispatch(ToDoAll());
      })
  }
}
export const UndoAction = (undoData) => {
  return {
    type: "UNDO",
    payload: undoData
  }
}

