import axios from "axios";

let undoData; 


let ToDoAxios= axios.create({
  baseURL:"http://115.248.119.138:8089/todo/",
  headers:{
  "Authorization":"ya29.Glz7BjkuR1zUc4rfLqKq0EqshDdlBawGOC-CrX-C_Culg4FzqUNtqv18cOH4SDJGKSq6AfIyZ0S5wKS9aG3qnvH74PhUI76tA6-q4YwgYre0GravaYfCdjHnsDUplw"
  }
}
)

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
  console.log(data);
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
  undoData = data
console.log(undoData)  
  return (dispatch) => {
    return ToDoAxios.post(`tasks/${data.tasks.taskId}?date=${data.tasks.createDate}&name=${data.tasks.taskName}
    &status=${data.tasks.status}`)
      .then(res => {
        dispatch(ToDoAll());
      })
  }
};

export const profileAction = (data) => {
  console.log(data);
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
    return ToDoAxios.post(`profile?firstname=${data.firstname}&lastname=${data.lastname}&picture=${data.picture}&userId=${11}`)
      .then(res => {
        dispatch(profileAction(data))
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
  undoData =data 
  console.log(undoData);
  return (dispatch) => {
    return ToDoAxios.delete(`tasks/${data.tasks.taskId}`)
      .then(res => {
        dispatch(ToDoAll());
      })
  }
}
export const UndoAction = (undoData) => {
console.log(undoData);
  return {
    type: "UNDO",
    payload: undoData
  }
}

