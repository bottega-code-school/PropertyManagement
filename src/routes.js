import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Reset from './components/auth/reset';

import Newsletter from './components/newsletter/newsletter';
import Requests from './components/requests/requests';

import Layout from './components/HOC/layout'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Signin}></Route>
                    <Route path="/signIn" component={Signin}></Route>
                    <Route path="/signUp" component={Signup}></Route>
                    <Route path="/reset" component={Reset}></Route>

                    <Route path="/newsletter" component={Newsletter}></Route>
                    <Route path="/requests" component={Requests}></Route>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;