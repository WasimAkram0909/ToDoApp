import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { withRouter } from "react-router";
import Google from "../assets/google.png";
import "../css/loginpage.css";

class GoogleAuth extends React.Component {
  componentDidMount() {
      console.log("didcomponent");
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:'79352387866-fqsjv565vpfa6eiog739gm25k15f6ak0.apps.googleusercontent.com',
          scope:'email',
          client_secret:"BuTLt32kxC4fuWIzsDnjq5jc"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    console.log("onAuthChange");
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    console.log(this.auth);
    this.auth.signIn({ux_mode:'redirect',redirect_uri:'http://localhost:3000/welcome'});
    // this.auth.signIn();
  };

  onSignOutClick = () => {
    console.log(this.props);
    this.auth.signOut();
    this.props.history.push("/");
  };

  renderAuthButton() {
    console.log("onAuthChange");
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button  onClick={this.onSignOutClick}  >
        {/* <Mail/> */}
          Log Out
        </button>
        );}
     else {
      return (
        <button  onClick={this.onSignInClick} className="Googlesign" >
          <img src={Google} />
        </button>
      );
    }
  }

  render() {
      console.log("render");
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
    console.log(state);
  return { isSignedIn: state.googledata.isSignedIn };
};

export default withRouter(connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth));
