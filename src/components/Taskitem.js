import React, { Component } from 'react';
import '../css/Taskitem.css';
import StatusNoneIcon from "../assets/StatusNone.svg";
import RescheduleIcon from "../assets/Success.png";


class Taskitem extends Component{
    render(){ 
        return(
            <React.Fragment>
                <div className="ItemContainer">
                    <div className="LogoClass">
                        <img src={StatusNoneIcon} className='StatusNoneIcon' />
                    </div>
                    <div className="taskData">
                        asdf asdf asdf asdf 
                        asdf asdf asdf asdf 
                        asdf asdf asdf asdf 
                        asdf asdf asdf asdf 
                        asdf asdf asdf asdf 
                        gggggggggg 
                    </div>
                    {/* <div className="editTaskButtons">
                        <img src={RescheduleIcon}/>
                        <img src={StatusNoneIcon} />
                    </div> */}
                </div>
                
            </React.Fragment>
        )
    }
}




export default Taskitem;