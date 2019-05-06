import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, userProfile } from '../actions';
import { withRouter } from 'react-router';
import Google from '../assets/google.png';
import '../css/loginpage.css';
import '../css/sideMenu.css';
import Logout from '../assets/Logout.svg';
import { setTimeout } from 'timers';

class GoogleAuth extends React.Component {
  componentDidUpdate(){
    if(this.auth.isSignedIn.get()){
      this.props.signIn(this.auth.currentUser.get().getId());
    }
  }
  componentDidMount() {
    window.gapi &&
      window.gapi.load('client:auth2', () => {
        window.gapi.client
          .init({
            //  Author
            clientId:
              '79352387866-fqsjv565vpfa6eiog739gm25k15f6ak0.apps.googleusercontent.com',
            scope: 'email',
            client_secret: 'BuTLt32kxC4fuWIzsDnjq5jc'
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            console.log(this.auth);
            this.authResp = this.auth.currentUser.get().getAuthResponse(true);
            setTimeout(()=>{
              // console.log("hello");
              localStorage.setItem("accessToken", JSON.stringify(this.authResp.access_token))
              },this.authResp.expires_in)
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    if (this.auth) {
      console.log(this.auth.isSignedIn.get());
      // if(this.auth.isSignedIn.get()){
      //   this.props.signIn(this.auth.currentUser.get().getId());
      // }
      // else{
      this.auth.signIn().then(res => {
        console.log(res.Zi.access_token);
         const  userId= res.El;
         const  accessToken= res.Zi.access_token;
        let data = JSON.parse(localStorage.getItem('userId'));
        let token=JSON.parse(localStorage.getItem("accessToken"));
        if (data !== null && res.El === data) {
          console.log("Already Existing user");
          this.props.history.push('/dashboard');
          if (res.Zi.access_token !== token) {
            localStorage.setItem("accessToken", JSON.stringify(accessToken))
          }
        } else {
          console.log("NewUser");
          localStorage.setItem('userId', JSON.stringify(userId));
          localStorage.setItem("accessToken", JSON.stringify(accessToken))
          this.props.userProfile(this.auth.currentUser.get().getBasicProfile());
          this.props.history.push("/welcome");
        }
      });}
    // }
  };

  onSignOutClick = () => {
    this.auth.signOut().then(res => {
      localStorage.setItem("accessToken",JSON.stringify(null));
      this.props.history.push('/');
    });
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
        className="SideMenuLinks logout active"
        onClick={this.onSignOutClick}
        >
          <img className="linkLogo" src={Logout} />
          <span className="SideMenuLink">LogOut</span>
        </button>
        );
    } else {
      return (
        <button onClick={this.onSignInClick} className="Googlesign">
          <img src={Google} />
        </button>
        );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.googleData.isSignedIn,
    isPorofileDetails: state.profileData
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      signIn,
      signOut,
      userProfile,
    }
  )(GoogleAuth)
);
