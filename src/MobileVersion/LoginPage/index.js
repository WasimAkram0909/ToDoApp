import React from "react";
import "./index.css";
import Logo from "../../assets/MobileLogo.svg";
import Google from "../../assets/Google.png";
class LoginPage extends React.Component {
    render() {
        return (
            <div className="loginContainer">
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="loginPageText">
                    <p >Organising always seems impossible <br/>until its DONE!</p> 
                </div>
                <div className="googleLink">
                    <p className="loginPageText loginText">Login using</p>
                    <div className="googleLogoContainer">
                        <img src={Google}alt="Google logo"/> 
                    </div>
                </div> 
            </div>
        );
        
    }
}
export default  LoginPage;