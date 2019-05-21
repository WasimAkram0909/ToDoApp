
import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, userProfile,tokenAction } from '../actions';
import { withRouter } from 'react-router';
import Google from '../assets/google.png';
import '../css/loginpage.css';
import '../css/sideMenu.css';
import Logout from '../assets/Logout.svg';
import { setTimeout } from 'timers';
class GoogleAuth extends React.Component {


  initializeGAPI=(callBack)=>{
    window.gapi &&
      window.gapi.load('client:auth2', () => {
        window.gapi.client
          .init({
            //  Author
            clientId:
              '79352387866-fqsjv565vpfa6eiog739gm25k15f6ak0.apps.googleusercontent.com',
              scope : 'https://mail.google.com  https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.login ',

            // scope: 'email',
            client_secret: 'BuTLt32kxC4fuWIzsDnjq5jc'
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.authResp = this.auth.currentUser.get().getAuthResponse(true);
            if(this.authResp &&this.authResp!==null){
              this.props.tokenAction(this.authResp.access_token);
              console.log(this.authResp.access_token);
           // setTimeout(() => {
              localStorage.setItem("accessToken", JSON.stringify(this.authResp.access_token));
              callBack && callBack();
            //}, this.authResp.expires_in);
          }
            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
  }
  componentDidMount() {
    this.initializeGAPI();
  }
 
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }
  getSignInPopup=()=>{
      this.auth.signIn().then(res => {
      const userId = res.El;
      const accessToken = res.Zi.access_token;
      const logInStatus = this.auth.isSignedIn.get();
      let data = JSON.parse(localStorage.getItem('userId'));
      let token = JSON.parse(localStorage.getItem("accessToken"));
      localStorage.setItem("logInStatus", JSON.stringify(logInStatus));
      if (data !== null && res.El === data) {
       
       window.location.reload();          
        if (res.Zi.access_token !== token) {
          console.log("@@@@AAAA")
          localStorage.setItem("accessToken", JSON.stringify(accessToken))
        }
         this.props.history.push('/dashboard');
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
  onSignInClick = () => {
    console.log("@@@@",this.auth);
    if (this.auth) {
      this.getSignInPopup()
      
    }else{
      this.initializeGAPI(this.getSignInPopup);
    }
  }
  onSignOutClick = () => {
    if (this.auth) {
      this.auth.signOut().then(res => {
        const logInStatus = this.auth.isSignedIn.get();
        localStorage.setItem("accessToken", JSON.stringify(null));
        localStorage.setItem("logInStatus", JSON.stringify(logInStatus));
        // localStorage.setItem("details",JSON.stringify(null));
      });
    }else{
      
    //  const logInStatus = this.auth.isSignedIn.get();
      localStorage.setItem("accessToken", JSON.stringify(null));
      localStorage.setItem("logInStatus", JSON.stringify(false));
    }
    this.props.history.push('/');
    window.location.reload();
    
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
export default withRouter(connect(mapStateToProps,{signIn,signOut,userProfile,tokenAction})(GoogleAuth));
