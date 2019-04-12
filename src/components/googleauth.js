import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut,profileAction } from '../actions';
import { withRouter } from "react-router";
import Google from "../assets/google.png";
import "../css/loginpage.css";
import '../css/sideMenu.css';
import Logout from '../assets/Logout.svg';

class GoogleAuth extends React.Component {
  
  componentDidMount() {
      // console.log("didcomponent");
    window.gapi.load('client:auth2', () => {
      // console.log('loaded GAPI');
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
    // console.log("onAuthChange");
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      this.props.profileAction(this.auth.currentUser.get().getBasicProfile());
        //we need to add getprofile api//
      this.props.history.push("/dashboard");
    } else {
      this.props.signOut();
      this.props.history.push("/");
    }
  };

  onSignInClick = () => {
  
    // this.auth.signIn({ux_mode:'redirect',redirect_uri:'http://localhost:3000/welcome'});
    
    // this.props.profileAction(data);
    console.log(this.auth.signIn());
    this.auth.signIn();
    // this.props.signIn();
  };

  onSignOutClick = () => {
    // console.log(this.props);
    this.auth.signOut();
    // this.props.signOut();
    
  };

  renderAuthButton() {
    // console.log("onAuthChange");
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      // console.log("logout");
      return (
        <button className="SideMenuLinks logout active" onClick={this.onSignOutClick}  >
        
         <img className="linkLogo" src={Logout}/>
<div className="SideMenuLink">Log Out</div> 
                        </button>
        );}
     else {
      // console.log("login");
      return (
        <button  onClick={this.onSignInClick} className="Googlesign" >
          <img src={Google} />
        </button>
      );
    }
  }

  render() {
      console.log("render");
      // if(this.props.isSignedIn)
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
    console.log(state);
  return { isSignedIn: state.googleData.isSignedIn,
              isPorofileDetails:state.profileData};
};

export default withRouter(connect(
  mapStateToProps,
  { signIn, signOut,profileAction}
)(GoogleAuth));
