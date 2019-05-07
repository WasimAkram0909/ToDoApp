import React from "react";
import "../css/loginpage.css";
import group from "../assets/group.png";
import GoogleAuth from "./googleauth";
import { withRouter} from "react-router-dom";
import Network from "../assets/artwork login page.png";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      this.props.history.push("/");
  }
  render() {
    return (
      <div className="gridcontanier">
                <div className="gridcontanier1">
                    <img className="networkimage" src={Network} alt="loginimage" />
                </div>
                <div className="gridcontanier2"></div>
                <div className="box">
                    <p className="boxText">Organising always seems impossible until its DONE!</p>
                    <img src={group} alt="appimage" />
                    <p className="todoText">TODO</p>
                    <p className="todoText">Login using</p>
                        <GoogleAuth />
                    <p className="LastText">By creating an account you Agree to our Terms of Conditions</p>
                </div>
            </div>
      );
  }
}
export default  withRouter(LoginPage);