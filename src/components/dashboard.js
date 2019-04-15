import React, { Component } from 'react';
import '../css/dashboard.css';
import SideMenu from "./sideMenu";
import Taskitem from "./Taskitem";
import HeadNav from "./HeadNav";
import  AllTasks from './AllTasks';
import AddTask from './addTask';
import MyProfile from './myProfile';
import {withRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import CompletedTask from './completeTask';
import RescheduledTask from './rescheduledTask';

class Dashboard extends Component{
    render(){
        console.log(this.props.match);
        return(
            <div className="container">
                <SideMenu className="sideMenu"/>
                <div className="Tasklists">
                    {/* <Taskitem></Taskitem> */}
                    {/* <HeadNav></HeadNav> */}

                <Route exact path={this.props.match.url + '/'} component={HeadNav}/>
                <Route exact path={this.props.match.url + '/Completed Tasks'} component={CompletedTask} />
                <Route exact path={this.props.match.url + '/Rescheduled Tasks'} component={MyProfile} />
                <Route exact path={this.props.match.url + '/Profile'} component={MyProfile} />
                
               {/* <MyProfile/> */}
                    {/* <Taskitem/> */}
                    {/* <div> */}
                    {/* <AllTasks/> */}
                    {/* </div> */}
                </div> 
            </div>
        )
    }
}

export default withRouter(Dashboard);