
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
            this.authResp = this.auth.currentUser.get().getAuthResponse(true);
            if(this.authResp &&this.authResp!==null){
            setTimeout(() => {
              localStorage.setItem("accessToken", JSON.stringify(this.authResp.access_token))
            }, this.authResp.expires_in);
          }
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
  }

  onSignInClick = () => {
    if (this.auth) {
      this.auth.signIn().then(res => {
        const userId = res.El;
        const accessToken = res.Zi.access_token;
        const logInStatus = this.auth.isSignedIn.get();
        let data = JSON.parse(localStorage.getItem('userId'));
        let token = JSON.parse(localStorage.getItem("accessToken"));
        localStorage.setItem("logInStatus", JSON.stringify(logInStatus));
        if (data !== null && res.El === data) {
          this.props.history.push('/dashboard');
          window.location.reload();          
          if (res.Zi.access_token !== token) {
            localStorage.setItem("accessToken", JSON.stringify(accessToken))
          }
        } else {
          localStorage.setItem('userId', JSON.stringify(userId));
          localStorage.setItem("accessToken", JSON.stringify(accessToken));
          localStorage.setItem("logInStatus", JSON.stringify(logInStatus));
          let details={
             image : this.auth.currentUser.get().getBasicProfile().getImageUrl(),
             name :this.auth.currentUser.get().getBasicProfile().getGivenName()
          }
          localStorage.setItem("details",JSON.stringify(details));
          // this.props.userProfile(this.auth.currentUser.get().getBasicProfile());
          this.props.history.push('/welcome');
        window.location.reload();
          

        }
      });
      
    }
  }
  onSignOutClick = () => {
    if (this.auth) {
      this.auth.signOut().then(res => {
        this.props.history.push('/');
        const logInStatus = this.auth.isSignedIn.get();
        localStorage.setItem("accessToken", JSON.stringify(null));
        localStorage.setItem("logInStatus", JSON.stringify(logInStatus));
        // localStorage.setItem("details",JSON.stringify(null));
        window.location.reload();
      });
    }
  }
  renderAuthButton = () => {
    let value = JSON.parse(localStorage.getItem('logInStatus'));
    if (value) {
      return (
        <button
          className="SideMenuLinks logout active"
          onClick={this.onSignOutClick}
        >
          <img className="linkLogo" src={Logout} alt=""/>
          <span className="SideMenuLink">LogOut</span>
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="Googlesign">
          <img src={Google} alt=""/>
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
    isPorofileDetails: state.profileData
  };
}
export default withRouter(connect(mapStateToProps,{signIn,signOut,userProfile,})(GoogleAuth));
