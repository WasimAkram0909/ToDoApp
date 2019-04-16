const TaskImages={
    completeData:[],
    rescheduleData:[],
    completeImage:{image:require("../assets/Completed Tasks.png")},
    rescheduleImage:{image:require("../assets/Reschedule.svg")},
};
const completeTask=(state=TaskImages,actions)=>{
   
        if(actions.type==="COMPLETED_TASK"){
            console.log(actions.payload.Task);
            return { ...state,completeData:state.completeData.concat(actions.payload),completeImage:state.completeImage}
        }
        else if(actions.type==="RESCHEDULE_TASK"){
            return { ...state,rescheduleData:state.rescheduleData.concat(actions.payload),rescheduleImage:state.rescheduleImage};
        }
    return state
}
export default completeTask;