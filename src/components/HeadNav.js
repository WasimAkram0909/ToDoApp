import React, { Component } from 'react';
import '../css/HeadNav.css';
import StatusNoneIcon from "../assets/StatusNone.svg";
import RescheduleIcon from "../assets/Reschedule.svg";
import CompletedIcon from "../assets/Completed.svg";
import DeleteIcon from "../assets/Delete.svg";



class HeadNav extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="ItemContainer">
                    <p>Todo</p>
                </div>
            </React.Fragment>
        )
    }
}


export default HeadNav;