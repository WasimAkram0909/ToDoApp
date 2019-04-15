import React, { Component } from 'react';
import '../css/HeadNav.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CalenderIcon from '../assets/Calender.svg';




class HeadNav extends Component{
    
    render(){
    console.log("this sis the state ", this.props);        
        return(
            <React.Fragment>
                <div className="HeadItemContainer">
                    <p className="HeadNavTitle">Todo</p>
                    <div className="HeadNavButtonsContainer">
                        <div className="HeadNavbtnCntr">
                        <i class="fa fa-plus"></i>
                            <p className="btntext">Add Task</p>
                        </div>
                        <div className="HeadNavbtnCntr">
                            <img className="icon" src={CalenderIcon}/>
                            <p className="btntext">Sort By</p>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}



const myStateToProps = (state) => {
    console.log(state,'tsityn');
    return {
        SideMenuData: state.SideMenuReducer,
    };
};

export default withRouter(connect(myStateToProps)(HeadNav));
