// const TaskImages = {
//     completeData: [],
//     rescheduleData: [],
// };
// const taskReducer = (state = TaskImages, actions) => {

//     if (actions.type === "COMPLETED_TASK") {
//         console.log(actions.payload);
//         return { ...state, completeData: state.completeData.concat(actions.payload) }
//     }
//     else if (actions.type === "RESCHEDULE_TASK") {
//         console.log(actions.payload);
//         return { ...state, rescheduleData: state.rescheduleData.concat(actions.payload) };
//     }
//     return state
// }
// export default taskReducer;