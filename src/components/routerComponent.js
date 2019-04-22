import React from 'react';
import Welcome from './Welcome';
import {BrowserRouter as Router,Route,Link ,Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import GoogleAuth from './googleauth';
import Dashboard from "./dashboard";



const RouterComponent=()=>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={LoginPage}/>
                <Route exact path='/welcome' component={Welcome}/>
                <Route  path="/dashboard" component={Dashboard} />
            </Switch>
            
        </Router>
    );
}
export default RouterComponent;