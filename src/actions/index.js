import axios from "axios";
import ToDoAxios from "../api/ToDoaxios";

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

export const profileAction = (data) => {
  // console.log(data,"actions");
  var id = data.getId();
  var fullName = data.getName();
  var name = data.getGivenName();
  var familyName = data.getFamilyName();
  var image = data.getImageUrl();
  var email = data.getEmail();
  var logInData = {
    id,
    fullName,
    name,
    familyName,
    image,
    email
  };
  return {
    type: "SIGN_IN_USER_DETAILS",
    payload: logInData,
  }
}
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
// export const UpdateTask = () => {
//   return {
//     type: "UPDATE_TASK"
//   };
export const DeleteTask = (data) => {
  console.log(data);

//   return (dispatch) => {
//     return ToDoAxios.delete(`tasks/1`)
//       .then(res => {
//         console.log(res)
//         dispatch(DeleteAction(res));
//       })
//   }
// }
// const DeleteAction = (data) => {
//   console.log(data);
  return {
    type: "DELETE_TASK",
    payload: data,
  };
};

// export const AddTask = () => {
//   return {
//     type: "ADD_TASK"
//   };
// };
export const SaveTask = (data) => {
  console.log(data.Task);
  var url = `http://115.248.119.138:8089/todo/tasks?name=${data.Task}&date=${data.date}&userId=${1}`;
  return (dispatch) => {
    return axios.post(url)
      .then(res => {
        console.log(res);
        console.log(res.data.task);
        dispatch(SaveTaskAction(res.data.task));
      }
    )
  }
}
export const SaveTaskAction = (dataid) => {
  // console.log(dataid);
  return {
    type: "SAVE_TASK",
    payload: dataid,
  };

};
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
};

export const RescheduleTask = (data) => {


  console.log(data);

  //   var reschedule = `${url}/updateTasks/${data.index}`;
  //   console.log(deleteThis);
  //   return (dispatch)=>{
  //       return axios.post(reschedule)
  //       .then (res =>{
  //         dispatch(rescheduleAction(res));
  //       })
  //   }
  // }
  //   const rescheduleAction=(data)=>{
  //    console.log(data);


  return {
    type: "RESCHEDULE_TASK",
    payload: data,
  }
}

export const CompletedTaskAction = (data) => {
  console.log(data);
  // console.log(date)


  //   var complete = `${url}/updateTasks/${data.index}`;
  //   console.log(complete);
  //   return (dispatch)=>{
  //       return axios.post(reschedule)
  //       .then (res =>{
  //         dispatch(completedAction(res));
  //       })
  //   }
  // }
  //   const completedAction=(data)=>{
  //    console.log(data);


  return {
    type: "COMPLETED_TASK",
    payload: data,
  }

}
export const UndoAction = () => {
  return {
    type: "UNDO"
  }
}
export const EditProfile = (data) => {
  // console.log(data);
  return {
    type: "EDIT_PROFILE",
    payload: data
  }
}





