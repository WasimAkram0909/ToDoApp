import React, { Component } from 'react';
import '../css/dashboard.css';
import SideMenu from "./sideMenu";
import Taskitem from "./Taskitem";
// import HeadNav from "./HeadNav";
import  AllTasks from './AllTasks';
import AddTask from './addTask';

class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <SideMenu className="sideMenu"/>
                {/* <div className="Tasklists"> */}
                    {/* asdf */}
                   
                {/* </div>  */}
               
                <div className="Tasklists">
                    {/* <Taskitem></Taskitem> */}
                    {/* <HeadNav></HeadNav> */}
                    <div></div>
                <AddTask/>
                    <Taskitem/>
                    {/* <div> */}
                    {/* <AllTasks/> */}
                    {/* </div> */}
                </div> 
            </div>
        )
    }
}

export default Dashboard;