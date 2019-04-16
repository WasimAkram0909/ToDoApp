import React from 'react';
import '../css/Toast.css';
import icon from '../assets/Toast completed.png';
// import {RescheduleTask} from '../actions';
import {connect } from 'react-redux';

class Toast extends React.Component {
       
        undo = ()=>{

        }
    render() {
        // console.log(this.props)
        return (
            <div className="flex-container">
                <div> <img src={this.props.data.image} /></div>
                <div className="text-display">You have successfully {this.props.data.massage}</div>
                <div className="undo" onClick = {this.undo()}>undo</div>
            </div >
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state);
    return {data:state.EditTask}
}

export default connect (mapStateToProps)(Toast);