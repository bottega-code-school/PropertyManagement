import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from './components/signin';
import Signup from './components/signup';

class Routes extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>welcome to the HOA manager</h1>
                    <h2>please login to continue</h2>
                </header>
                <Switch>
                    <Route path="/signIn" component={Signin}></Route>
                    <Route path="/signUp" component={Signup}></Route>
                </Switch>
            </div>
        )
    }
}

export default Routes;