import React, { Component } from 'react';
import Welcome from './Welcome';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import GoogleAuth from './googleauth';
import Dashboard from "./dashboard";
import { connect } from "react-redux";


class RouterComponent extends Component {
    render() {
        console.log(this.props.isSignedIn);
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    
                    {this.props.isSignedIn ? <Route exact path='/welcome' component={Welcome} /> :  <Route  path="/" component={LoginPage}/>}
                    {this.props.isSignedIn ? <Route path="/dashboard" component={Dashboard} /> : <Route  path="/" component={LoginPage} />}
                </Switch>
            </Router>
        );
    }
}
const MyState = (state) => {
    return { isSignedIn: state.googleData.isSignedIn }
}

export default connect(MyState)(RouterComponent);