import React, { Component } from 'react';
import '../css/HeadNav.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CalenderIcon from '../assets/Calender.svg';
// import AddTask from './addTask';



class HeadNav extends Component{
    constructor(props) {
        super(props)
        this.state = {
          showComponent: false,
        }
    }
    addtask = () => {
        // console.log('addtask');
        // this.setState({
        //   showComponent: true,
        // });
      }
    
    render(){
    console.log("this sis the state ", this.props);        
        return(
            <React.Fragment>
                <div className="HeadItemContainer">
                    <p className="HeadNavTitle">Todo</p>
                    <div className="HeadNavButtonsContainer">
                        <div className="HeadNavbtnCntr">
                        {/* <button className="HeadNavbtnCntr"> */}
                        <i class="fa fa-plus"></i>
                            <p className="btntext" onClick={this.addTask}>Add Task</p>
                        {/* </button> */}
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
