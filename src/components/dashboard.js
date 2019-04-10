import React, { Component } from 'react';
import '../css/dashboard.css';
import SideMenu from "./sideMenu";
import Taskitem from "./Taskitem";
import HeadNav from "./HeadNav";

class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <SideMenu className="sideMenu"/>
                {/* <div className="Tasklists"> */}
                    {/* asdf */}
                    {/* <AllTasks/> */}
                {/* </div>  */}
                <div className="Tasklists">
                    <Taskitem></Taskitem>
                    <HeadNav></HeadNav>
                    <div></div>
                </div> 
            </div>
        )
    }
}

export default Dashboard;