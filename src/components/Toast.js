import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import '../css/Toast.css';
import icon from '../assets/Toast completed.png';
import { connect } from 'react-redux';
import { UndoAction } from '../actions';
// import CloseToast from './CloseToast';
import onClickOutside from 'react-onclickoutside';

class Toast extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toastRef = React.createRef();
//   }
  state = {
    show: true
  };

  handleClickOutside = evt => {
    // alert("message");
    this.setState({ show: false });
  };
  undo = data => {
    console.log(data);
    this.props.UndoAction(data);
  };

  render() {
    // console.log(this.props);
    // console.log(this.props)
    return (
      <React.Fragment>
        {this.state.show ? (
          <div className="flex-container" id="flex-container">
            <div>
              {' '}
              <img src={this.props.data.image} />
            </div>
            <div className="text-display">
              You have successfully {this.props.data.message}
            </div>
            <div className="undo" onClick={data => this.undo(data)}>
              <a href="#">undo</a>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    data: state.EditTask,
    Status: state.allTasks.Status
  };
};

var EnhancedComponent = onClickOutside(Toast);
Toast = connect(
  mapStateToProps,
  { UndoAction }
)(EnhancedComponent);
export default Toast;

//    document.getElementById("flex-container").style='display:none';

//         componentWillUnmount () {
//             window.Toast.removeEventListener('click', this.handleDocumentClick)
//           }

//   /* using fat arrow to bind to instance */
//   handleDocumentClick = (evt) => {
//     const area = ReactDOM.findDOMNode(this.refs.area);

//     if (!area.contains(evt.target)) {
//       onClickOutside(evt)
//     }
//   }
/**using refs 
// handleToast =()=>{
//     console.log(this.toastRef.current.style.display);
//     // const display = 
//     this.toastRef.current.style.display="none";
//     ref={this.toastRef} 
//     onClick ={this.handleToast} style={divStyle}

// const divStyle = {
  
//     border: '5px solid pink'
//   };
// 
// }

*/
