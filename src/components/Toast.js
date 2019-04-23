import React from 'react';
import '../css/Toast.css';
import { connect } from 'react-redux';
import { UndoAction } from '../actions';

class Toast extends React.Component {
  undo = data => {
    // console.log(data);
    this.props.UndoAction(data);
  };

  render() {
    // console.log(this.props.showToast);
    return (
      <React.Fragment>
        <div className="flex-container" id="flex-container">
          <div>
            <img src={this.props.showToast.toastImage} />
          </div>
          <div className="text-display">{this.props.showToast.toastMsg}</div>
          <div className="undo" onClick={data => this.undo(data)}>
            <a href="#">undo</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    Status: state.allTasks.Status
  };
};

export default connect(
  mapStateToProps,
  { UndoAction }
)(Toast);

// this.toastRef = React.createRef();

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

//   handleClickOutside = e => {
//     // this.setState( prevState=>({
//     //   isShow: !prevState.isShow
//     //   }));
// console.log(this.props.showToast);
//     this.setState( {
//       isShow: false,

//       });

//       // console.log( this.state.isShow + "in Toast Local ");
//   };

// var EnhancedComponent = onClickOutside(Toast);
// Toast = connect(
//   mapStateToProps,
//   { UndoAction }
// )(EnhancedComponent);
// export default Toast;
