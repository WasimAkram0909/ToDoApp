import React from 'react';
import '../css/Toast.css';
import { connect } from 'react-redux';
import { UndoAction } from '../actions';

class Toast extends React.Component {
  state = {
    isShow: true
  };

  undo = () => {
    this.setState({
      isShow: false
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isShow: false });
    }, 10000);
    if (!this.state.isShow) {
      return null;
    }
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
            <div className="undo" onClick={() => this.undo()}>
              <span>undo</span>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { UndoAction }
)(Toast);
