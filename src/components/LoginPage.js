import React from "react";
import "../css/loginpage.css";
import Google from "../assets/google.png"
import group from"../assets/group.png";
import GoogleAuth from "./googleauth";
import { Link } from 'react-router-dom';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="gridcontanier">
        
            <div className="gridcontanier1">
            <div className="box">
            <p className="boxText">Organising always seems impossible until its DONE!</p>
            <img src={group} href="appimage"/>
            <p className="todoText">TODO</p>
            <p className="todoText">Login using</p>
            <button className="Googlesign"><img src={Google} href="#" /></button>
            <p className="LastText">By creating an account you Agree to our Terms of Conditions</p>
            </div>
            </div>
             <div className="gridcontanier2">
            </div>
                </div>
        );
    }
}
export default LoginPage;