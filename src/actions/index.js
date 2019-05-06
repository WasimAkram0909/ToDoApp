import axios from "axios";


let token = JSON.parse(localStorage.getItem('accessToken'));
console.log(token);
// if(token===null){
//   token={
//     accessToken:null
//   }
// }

let ToDoAxios = axios.create(
  {
    baseURL: "http://115.248.119.138:8089/todo/",
    headers: {
      "Authorization": token
    }
  }
)
export const userProfile = (data) => {

  var image = data.getImageUrl();
  var name = data.getGivenName();
  return {
    type: "SIGN_IN_USER_DETAILS",
    payload: {
      image,
      name
    },
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
  return (dispatch) => {
    return ToDoAxios.post(`profile`, 
    {
        "firstName": data.firstname,
        "lastName": data.lastname,
        "picture": data.picture
      
    })
      .then(res => {
        console.log(res);
        dispatch(profileAction());
      // dispatch(EditProfileAction(res.data));
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


