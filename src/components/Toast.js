import React from 'react';
import '../css/Toast.css';
import icon from '../assets/Toast completed.png';

class Toast extends React.Component {

    render() {
        return (

            <div className="flex-container">
                <div> <img src={icon} /></div>
                <div className="text-display">You have successfully rescheduled the task</div>
                <div className="undo">
                <a href="#">undo</a>
                </div>
            </div >
        )

    }

}



export default Toast;