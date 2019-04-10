import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut,profileAction } from '../actions';
import { withRouter } from "react-router";
import Google from "../assets/google.png";
import "../css/loginpage.css";
import '../css/sideMenu.css';
import Logout from '../assets/Logout.svg';

class GoogleAuth extends React.Component {
  state={

  }
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
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    if (this.auth.isSignedIn.get()) {
      var profile = this.auth.currentUser.get().getBasicProfile();
      // console.log(profile);
      var id='ID: ' + profile.getId();
      var fullName='Full Name: ' + profile.getName();
      var name='Given Name: ' + profile.getGivenName();
      var familyName='Family Name: ' + profile.getFamilyName();
      var image='Image URL: ' + profile.getImageUrl();
      var email='Email: ' + profile.getEmail();
      // console.log(profile,id);
      var data={profile,id,fullName,name,familyName,image,email};
      console.log(data);
      // console.log(this.props);
      this.props.profileAction(data);
    }
    // console.log(this.auth);
   
    // console.log(this.auth2.BasicProfile);
    this.auth.signIn({ux_mode:'redirect',redirect_uri:'http://localhost:3000/welcome'});
    // this.props.profileAction(data);
    this.auth.signIn();
  };

  onSignOutClick = () => {
    // console.log(this.props);
    this.auth.signOut();
    this.props.history.push("/");
  };

  renderAuthButton() {
    // console.log("onAuthChange");
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      // console.log("logout");
      return (
        <button  onClick={this.onSignOutClick}  >
        logout
                        {/* <img className="linkLogo" src={Logout}/>
                        <div className="SideMenuLink">Log Out</div> */}
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
      // console.log("render");
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
