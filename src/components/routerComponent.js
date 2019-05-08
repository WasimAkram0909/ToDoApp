

import React, { Component } from 'react';
import Welcome from './Welcome';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from "./dashboard";
import {connect} from "react-redux";
class RouterComponent extends Component {
    render() {
        let value = JSON.parse(localStorage.getItem('logInStatus'));
        let signIn = this.props.isSignedIn;
        value = value || signIn;
        return (
            <Router>
                <Switch>
                    {value ? <Route path='/welcome' component={Welcome} /> : null}
                    {value ? <Route path="/dashboard" component={Dashboard} /> : null}
                    {value ? <Redirect to='/dashboard' /> : null}
                    <Route path="/" component={LoginPage} />
                </Switch>
            </Router>
        );
    }
}
const myState=(state)=>{
    return {isSignedIn:state.googleData.isSignedIn}
}
export default connect(myState)(RouterComponent);