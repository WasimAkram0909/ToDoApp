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
    window.gapiWasLoaded = () => {
      if (!this.gapiWasLoaded) {
        this.gapiWasLoaded = true;
        // ReactDOM.render(<App />, document.getElementById('root'));
      }
    };
    
    setTimeout(() => {
      // @ts-ignore
      window.gapiWasLoaded();
    }, 1000);

    ////PREVIOUS CODE CORRECT/////////
      console.log("didcomponent");
    window.gapi.load('client:auth2', () => {
      // console.log('loaded GAPI');
      window.gapi.client
        .init({
        //  Author
          clientId:'79352387866-fqsjv565vpfa6eiog739gm25k15f6ak0.apps.googleusercontent.com',
          scope:'email',
          client_secret:"BuTLt32kxC4fuWIzsDnjq5jc"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.authResp=this.auth.currentUser.get().getAuthResponse(true);
          console.log(this.authResp.expires_at);
          // expires_at
          console.log(this.authResp.expires_in);
          console.log(this.authResp.access_token);
          this.setRefreshTimeout(this.authResp.expires_at);
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  setRefreshTimeout = (expiresAt) => {
    // Either 5 minutes before the deadline, or 5 minutes from now. This
    // should prevent thrashing while keeping the credentials fresh.
    const oneMin = 60 * 1000;
    var refreshDeadline =  Math.max(
      5*oneMin,
      expiresAt - Date.now() - (5*oneMin));
    console.log("Refreshing credentials in "
                + Math.floor(refreshDeadline/oneMin).toString()
                + " minutes");
    setTimeout(this.reloadAuthToken, refreshDeadline);
  }
  reloadAuthToken = () => {
    this.state.googleUser.reloadAuthResponse().then(
      // success handler.
      (authResponse) => {
        // The GoogleUser is mutated in-place, this callback updates component state.
        this.accessToken = authResponse.access_token;
        this.setRefreshTimeout(authResponse.expires_at);
      },
      // fail handler.
      (failResponse) => {
         this.accessToken = "";
         console.log("Could not refresh token");
         console.log(failResponse);
      }
    );
  }

  onAuthChange = isSignedIn => {
    // console.log("onAuthChange");
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      // this.props.signIn(this.auth.currentUser.get().getId());
      
      console.log(this.props.signIn(this.auth.currentUser.get().getId()));
      this.props.profileAction(this.auth.currentUser.get().getBasicProfile());
        //we need to add getprofile api//
        // this.props.history.push('/welcome');
     console.log(this.props.history);
    } else {
      this.props.signOut();
      this.props.history.push("/");
    }
  };
  
  onSignInClick = () => {
    this.auth.signIn()
    .then(res=>{
      // console.log("this is welcome page ");
      this.props.history.push('/welcome')
    });
     
    // );
    // this.auth.signIn({ux_mode:'redirect',redirect_uri:'http://localhost:3000/welcome'});
    // this.props.history.push('/welcome');
    // this.props.profileAction(data);
    // console.log(this.auth.signIn());
    
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
<span className="SideMenuLink">LogOut</span> 
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
      // if(this.props.isSignedIn)
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
    // console.log(state);
  return { isSignedIn: state.googleData.isSignedIn,
              isPorofileDetails:state.profileData};
};
// class
// const authToken=
// window.gapi.client.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(true).access_token

export default withRouter(connect(
  mapStateToProps,
  { signIn, signOut,profileAction}
)(GoogleAuth));
// export const authToken=window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(true).access_token;
