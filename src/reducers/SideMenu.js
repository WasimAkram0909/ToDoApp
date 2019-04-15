const SideMenuData = [
    {
        name:"Todo",
        image:require("../assets/Alltasks.svg"),
    },
    {
        name:"Completed Tasks",
        image:require("../assets/CompletedTasks.svg"),
    },
    {
        name:"Rescheduled Tasks",
        image:require("../assets/Rescheduld_Tasks.svg"),
    },
    {
        name:"Profile",
        image:require("../assets/Profile.svg"),
    }
]
    const SideMenuReducer =(state=SideMenuData,action) =>{
        return state;
    }

export default SideMenuReducer;