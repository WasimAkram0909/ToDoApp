import React, { Component } from 'react';
import Welcome from './Welcome';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from "./dashboard";
class RouterComponent extends Component {
    render() {
        let signInStatus = JSON.parse(localStorage.getItem('logInStatus'));
        return (
            <Router>
                <Switch>
                    {signInStatus ? <Route exact path='/welcome' component={Welcome} /> : null}
                    {signInStatus ? <Route path="/dashboard" component={Dashboard} /> : null}
                    {signInStatus ? <Redirect to='/dashboard' /> : null}
                    <Route path="/" component={LoginPage} />
                </Switch>
            </Router>
        );
    }
}
export default (RouterComponent);