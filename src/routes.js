import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from './components/signin';
import Signup from './components/signup';

import Layout from './components/HOC/layout'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/signIn" component={Signin}></Route>
                    <Route path="/signUp" component={Signup}></Route>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;