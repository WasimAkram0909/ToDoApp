const initialValues ={
    Task:[
        {
        Task1:"Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch"
         },
         {
        Task2:"Remind John to call Alex on OS configuration and let him know that meeting JA Marsh for lunch"
      }
    ],
    date:'',
    Status:'null'
}
export default (state=initialValues,action) => {
    var dte=new Date();
    // console.log()

    switch(action.type){
        case "ADD_TASK":
        return{...state,Task:action.payload,date:dte}
        // if( ){
        // }
    }
    return state;
}
// const intial_values =[
//   
// ]
// const All_Tasks_Reducer = (state=intial_values,action) => {
//     console.log(action.type);
//     if(action.type=="TO_DO_ALL"){
//         console.log('action');
//         return state;
//     }
//     return state;

// }
