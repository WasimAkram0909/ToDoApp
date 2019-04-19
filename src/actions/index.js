import axios from "axios";
//Action Creators
// export const ADD_TODO = 'ADD_TODO'

var instance = axios.create({
  baseURL: "http://115.248.119.138:8089/todo",
  headers: {
    "Authorization": "ya29.GlzwBucnMSApyvMJM2mxwLfeQY5N2Iy7l1l7-CnEUWxbDMy5zbXyMH49gIY77T2gRoPs0wwPdOIQag-Y2o6Ji1lxmS2U1Hrv6-S1rWOK0QNq3NkNbGQfT1i0BFOc8w"
  }
})
// const url = "http://115.248.119.138:8089/todo";
// const auth=headers{
//   "Authorization":"ya29.GlzwBvtnqixqt0LZ5spZ8bcepYvOvmptREz5LbrWL5O3uJbiDcBo2biWA4SURh3NkIPxqVkc8_Yn-Njg_mh7emG_R3tDKXjAsnvxhgQZstOt9ss78YQ6s-zHE9PgRw"
// }


export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId
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
  var logInData = { id, fullName, name, familyName, image, email };
  return {
    type: "SIGN_IN_USER_DETAILS",
    payload: logInData,
  }
}
export const ToDoAll = () => {
  // console.log(data);
  var url = "http://115.248.119.138:8089/todo/tasks";
  return (dispatch) => {
    return axios.get(url,
      {
        headers: {
          "Authorization": " ya29.GlzwBnM5vXdevuFPHytzazSIz-U20hW0jT9sTUUcgfsvW93uXO2tZ2mgQNf5bwqkMBVsQRUtmyuRVRY3aTHfU7w3MFWWXq_5tuv4AxcYuKBkROnXmZ2cjRMz3TB6Qg"
        }
      })
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
const ToDoAllAction = (RES) => {
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
export const DeleteTask = (data) => {

  //   var url =`http://115.248.119.138:8089/todo/tasks/1`
  //   return (dispatch)=>{
  //       return axios.delete(url,{
  //         header:{
  //           "Authorization":"ya29.GlzvBsOraSZZFPKy0MHOwCvwHTw_1j_j4muuoicb4Y68z5HhTm4iGpJuiGeroL55dxAHbWYJb2Xq9hPxBZtwXGbwcT9MgjHFGWSruAm-mJhLETuCZpOZEbtGyphPnA"
  //         }
  //       })
  //       .then (res =>{
  //         console.log(res)
  //         dispatch(DeleteAction(res));
  //       })
  //   }
  // }
  //   const DeleteAction=(data)=>{
  //    console.log(data);
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
const SaveTaskAction = (dataid) => {
  console.log(dataid);
  return {
    type: "SAVE_TASK",
    payload: dataid,

  };
};
export const TasksApi = (data) => {
  console.log(data.tasks.status);
  var status = data.tasks.status;
  console.log(data.status);
  var url = `http://115.248.119.138:8089/todo/getTasksByStatus?status=completed`;
  return (dispatch) => {
    return axios.get(url, {
      headers: {
        "Authorization": "ya29.GlzwBucnMSApyvMJM2mxwLfeQY5N2Iy7l1l7-CnEUWxbDMy5zbXyMH49gIY77T2gRoPs0wwPdOIQag-Y2o6Ji1lxmS2U1Hrv6-S1rWOK0QNq3NkNbGQfT1i0BFOc8w"
      }
    })
      .then(res => {
        console.log(res);
        // console.log(res.data.main);
        // export const CompletedTaskAction =(data)=>{
        dispatch(CompletedTaskAction(res.data));
      }
      )
  }


}
export const SortBy = () => {
  return {
    type: "SORT_BY"
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
  console.log(data);
  return {
    type: "EDIT_PROFILE",
    payload: data
  }
}
