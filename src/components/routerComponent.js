import React from 'react';
import Welcome from './Welcome';
import {BrowserRouter as Router,Route,Link ,Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import GoogleAuth from './googleauth';

const RouterComponent=()=>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={LoginPage}/>
                <Route  path='/oauth/signin' component={Welcome}/>
            </Switch>
            <GoogleAuth/>
        </Router>

    );
}
export default RouterComponent;