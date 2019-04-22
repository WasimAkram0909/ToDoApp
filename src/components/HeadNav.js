import React, { Component } from 'react';
import '../css/HeadNav.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CalenderIcon from '../assets/Calender.svg';
import AddTask from './addTask';
import Taskitem from "./Taskitem";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Calendar } from 'react-calendar';
import moment from 'moment';
import {SortByAction} from "../actions";
// import SortBy from "./SortBy";



class HeadNav extends Component{
    constructor(props) {
        super(props)
        this.state = {
          showComponent: false,
          showCalendar:false,
          date: new Date(),
        }
    }




    callMoment(){
        var thisIsMomentJs = moment().format("MM DD YYYY");
        console.log("its working", thisIsMomentJs);
    }

    onSelectingOfDate = date => {
        console.log("onchange function is calling;;;;");
        console.log(this.props.match.url);
        let selectDate = moment(date).format("YYYY MM DD");
        // console.log(selectDate);
        selectDate = selectDate.slice(0,4)+"-"+ selectDate.slice(5,7)+"-"+ selectDate.slice(8,10);
        // console.log(selectDate);
       let  selectType= this.props.match.url;
        this.props.SortByAction({selectDate,specificSort:this.props.specificSort});
        this.setState({
          showCalendar:false, 
          showSort:true,
        });     
      }


    sortBy = () =>{
    console.log("soryBY method is calling..");
       this.setState({
           showCalendar:true,
       })
}


    // addtask = () => {
    //     console.log('addtask');
    //     this.setState({
    //       showComponent: true,
    //     });
    //   }
    render(){
        // console.log(this.props);
    // console.log("this sis the state ", this.props);        
        return(
            
            <React.Fragment>
                <div className="HeadItemContainer">
                    <p className="HeadNavTitle">{this.props.title}</p>
                    <div className="HeadNavButtonsContainer">

                        {this.props.showAdd ? <div className="HeadNavbtnCntr">
                            <Link to="/dashboard/AddTask" 
                            // onClick={()=> this.props.ChangeState()} 
                            className="HeadNavbtnCntr linkTag">
                                <i className="fa fa-plus white"></i>
                                <p className="btntext btntxt2" onClick={()=>{this.callMoment()}} >Add Task</p>
                            </Link>
                        </div>:<div></div>}
                    
                        
                        <div className="HeadNavbtnCntr" onClick={()=>this.sortBy()}>
                            <img className="icon" src={CalenderIcon} />
                            <p className="btntext" >Sort By</p>
                        </div>
                    </div>
                </div>
                {/* <Route exact path='/dashboard/AddTask' compoSortBynent={AddTask}/> */}
                {/* {this.state.showComponent?
                        <AddTask/>
                        :null} */}
                {/* <Taskitem/> */}

                {this.state.showCalendar ? (<Calendar className="react-calender"
          onChange={this.onSelectingOfDate} />) : null}
                {/* {this.state.showSort ? <SortBy/>:null} */}
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

export default withRouter(connect(myStateToProps ,{SortByAction} )(HeadNav));
