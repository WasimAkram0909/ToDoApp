import axios from "axios";
import store from '../reducers/task.js';
// var tokenValue = '';
// export const tokenAction = (data) => {
//   return {
//     type: "ACCESS_TOKEN",
//     payload: data
//   }
// }
export const ToDoAxios = axios.create({
  baseURL: "http://115.248.119.138:8089/todo/",
  headers: {
    "Authorization": "ya29.Glz6Bi4-S-TFyWFxmwoBOnwNbVBQ5cknDltJMqmqC9uxDb52Z2mry8WLdhCWB_Pbm4aETkoM9crjrkSyINMUXulezRIwf3rNXP6yMzgZw4_ZV5IDuAYOeiKABYHvyA",
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
        // console.log(res.data.tasks);
        var filtered = res.data.tasks.filter((data1) => {
          // console.log(data1.status);
          if (data1.status === "PENDING") {
            // console.log(data1);
            return data1
          }
        });
        
dispatch(ToDoAllAction(filtered));

      }
      )
  }
}
export const ToDoAllAction = (RES) => {
  return {
    type: "TO_DO_ALL",
    payload: RES,
  };
};
export const SaveTask = (data) => {
  console.log(data);
  return (dispatch) => {
    return ToDoAxios.post(`tasks?date=${data.createDate}&name=${data.taskName}`,
      {
        headers: {
          "Authorization": data.token,
        }
      })
      .then(res => {
        dispatch(ToDoAll());
      })
  }
}
const SaveTaskAction = (dataid) => {
  return {
    type: "SAVE_TASK",
    payload: dataid,

  }
}
export const UpdateTask = (data) => {
  console.log(data);
  return (dispatch) => {
    return ToDoAxios.post(`tasks/${data.tasks.taskId}?date=${data.tasks.createDate}&name=${data.tasks.taskName}
    &status=${data.tasks.status}`)
      .then(res => {
        // console.log(res);
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
  // console.log(data);
  return (dispatch) => {
    return ToDoAxios.post(`profile?firstname=${data.firstname}&lastname=${data.lastname}&picture=${data.picture}&userId=${11}`, {
      headers: {
        "Authorization": data.token,
      }
    })
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

export const TasksApi = (data) => {
  console.log(data);
  return (dispatch) => {
    return ToDoAxios.get(`getTasksByStatus?status=${data}`)
      .then(res => {
        console.log(res.data.tasks);

        dispatch(TaskAction(res.data.tasks));
      }
      )
  }
}

export const TaskAction = (data) => {
  console.log(data);
  // console.log("this action is triggerd form sidemenu");
  return {
    type: "COMPLETED_TASK",
    payload: data,
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
  console.log(data);

  return (dispatch) => {
    return ToDoAxios.delete(`tasks/${data.taskId}`, {
      headers: {
        "Authorization": data.token,
      }
    })
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
    payload: data
  }
}

