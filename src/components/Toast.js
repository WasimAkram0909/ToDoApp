import React from 'react';
import '../css/Toast.css';
import { connect } from 'react-redux';

class Toast extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isShow: true      
    };
  }

  onUndo = () => {
    this.setState({
      isShow: false
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isShow: false });
    }, 5000);
    if (!this.state.isShow) {
      return null;
    }
  }
trigTwoMethods = () =>{
  this.props.undoMyChanges();
  this.onUndo();  
}
  render() {
    return (
      <React.Fragment>
        {this.state.isShow ? (
          <div className="flex-container" id="flex-container">
            <div>
              <img src={this.props.showToast.toastImage} />
            </div>
            <div className="text-display">{this.props.showToast.toastMsg}</div>
            <div className="undo" onClick={() => this.trigTwoMethods()}>
              <span>UNDO</span>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default  Toast

