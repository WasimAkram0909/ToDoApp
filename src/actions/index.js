import axios from "axios";
let ToDoAxios= axios.create({
  baseURL:"http://115.248.119.138:8089/todo/",
  headers:{
  "Authorization":"ya29.Glz7Bq2yQ9F9uZ_uYmL-lQk2vDKZtVSsrN3ZUnpeGIy-bzWa38Kyv9VcO6NDxxp68HEF9rB7xmSuPlCNbNqRwOSjWgvfrlP6WgDjbDO131Z2E7WxUpEpgJxXov6lwQ"
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
    type: "COMPLETED_TASK",
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
export const UndoAction = (data) => {
  return {
    type: "UNDO",
    payload: data
  }
}

