import axios from "axios";
var token = JSON.parse(localStorage.getItem('accessToken'));
export const tokenAction=(data)=>{
  return{
    type:'TOKEN_ACCESS',
    payload:data
  }
}
var ToDoAxios = axios.create(
  {
    baseURL: "http://115.248.119.138:8089/todo/",
    headers: { 
      "Authorization": JSON.parse(localStorage.getItem('accessToken')),
    }
  }
)

export const signIn = (data) => {
  return {
    type: "SIGN_IN",
    payload: data,
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
export const userProfile = (data) => {
  let image = data.getImageUrl();
  let name = data.getGivenName();
  return {
    type: "SIGN_IN_USER_DETAILS",
    payload: { image, name },
  }
}
export const profileAction = () => {
  return (dispatch) => {
    return ToDoAxios.get("profile")
      .then(res => {
        dispatch(GetProfile(res.data));
      })
  }
}
export const ToDoAll = (data) => { 
  return (dispatch) => {
    return ToDoAxios.get("tasks")
      .then(res => {
        var pendingData = res.data.tasks.filter((taskData) => {
          if (taskData.status === "PENDING" || taskData.status === "RESCHEDULED") {
            return taskData;
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
export const UpdateTask = (data) => {
  return (dispatch) => {
    return ToDoAxios.post(`tasks/${data.tasks.taskId}?date=${data.tasks.createDate}&name=${data.tasks.taskName}
    &status=${data.tasks.status}`)
      .then(res => {
        dispatch(ToDoAll());
      })
  }
};


const GetProfile = (Profiledata) => {
  return {
    type: "GET_PROFILE",
    payload: Profiledata
  }
}
export const EditProfile = (data) => {
  return (dispatch) => {
    return ToDoAxios.post("profile",
      {
        "firstName": data.firstname,
        "lastName": data.lastname,
        "picture": data.picture

      })
      .then(res => {
        dispatch(profileAction());
      })
  }
}
export const TasksApi = (status) => {
  return (dispatch) => { 
    dispatch(TaskAction([]));
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


