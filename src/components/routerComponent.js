import React, { Component } from 'react';
import Welcome from './Welcome';
import { BrowserRouter as Router, Route, Switch,Redirect,withRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from "./dashboard";
import { connect } from "react-redux";
// import PrivateRoute from "./PrivateRoute";


class RouterComponent extends Component {
    render() {
        // console.log(this.props.isSignedIn);
        console.log(this.props)
        let value=JSON.parse(localStorage.getItem('flag'));
        console.log(value);
        return (
            <Router>
                <Switch>
{value  ? <Route exact path='/welcome' component={Welcome} /> : null}
{value ? <Route  path="/dashboard" component={Dashboard} /> : null}
 {value ? <Redirect to='/dashboard' /> : null}
<Route path="/" component={LoginPage} />
</Switch>
            </Router>
        );
    // }
    // else{
    //     return (
    //         // <Router>
    //         // <Route path="/" component={LoginPage} />
    //         // </Router>
    //     );
    }
}


const MyState = (state) => {
//     console.log(state);
return state
//     return { isSignedIn: state.googleData.isSignedIn }
}

export default connect(MyState)(RouterComponent);