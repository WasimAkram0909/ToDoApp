import React, { Component } from 'react';
import '../css/HeadNav.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CalenderIcon from '../assets/Calender.svg';
import AddTask from './addTask';
import Taskitem from "./Taskitem";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


class HeadNav extends Component{
    constructor(props) {
        super(props)
        this.state = {
          showComponent: false,
        }
    }
    // addtask = () => {
    //     console.log('addtask');
    //     this.setState({
    //       showComponent: true,
    //     });
    //   }
    render(){
        console.log(this.props);
    // console.log("this sis the state ", this.props);        
        return(
            
            <React.Fragment>
                <div className="HeadItemContainer">
                    <p className="HeadNavTitle">{this.props.title}</p>
                    <div className="HeadNavButtonsContainer">
                    
                        {this.props.showAdd ? <div className="HeadNavbtnCntr">
                            <Link to="/dashboard/AddTask" className="HeadNavbtnCntr linkTag">
                                <i className="fa fa-plus white"></i>
                                <p className="btntext btntxt2" >Add Task</p>
                            </Link>
                        </div>:<div></div>}
                        
                        <div className="HeadNavbtnCntr">
                            <img className="icon" src={CalenderIcon}/>
                            <p className="btntext">Sort By</p>
                        </div>
                    </div>
                </div>
                {/* <Route exact path='/dashboard/AddTask' component={AddTask}/> */}
                {/* {this.state.showComponent?
                        <AddTask/>
                        :null} */}
                {/* <Taskitem/> */}
            </React.Fragment>
        )
    }
}



const myStateToProps = (state) => {
    // console.log(state,'tsityn');
    return {
        SideMenuData: state.SideMenuReducer,

    };
};

export default withRouter(connect(myStateToProps)(HeadNav));
