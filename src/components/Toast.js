import React from 'react';
import '../css/Toast.css';

class Toast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isShow: false });
    }, 3000);
    if (!this.state.isShow) {
      return null;
    }
  }
  onUndoClick = () => {
    this.props.undoMyChanges();
    this.setState({
      isShow: false
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isShow ? (
          <div className="flex-container tostAnimation" id="flex-container">
            <div>
              <img src={this.props.showToast.toastImage} alt="ToastImage" />
            </div>
            <div className="text-display">{this.props.showToast.toastMsg}</div>
            <div className="undo" onClick={() => this.onUndoClick()}>
              <span>UNDO</span>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Toast

