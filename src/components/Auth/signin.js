import React, { Component } from 'react';

import addHeaderBorder from '../HOC/addHeaderBorder';
import addTitle from '../HOC/addTitle';

import TitledInput from '../TitledInput';

class Signin extends Component {
    render() {
        return (
            <form className="signin-form">
                <TitledInput type="text" placeholder='Enter Email' title='Email'/>
                <TitledInput type="password" placeholder='Enter Password' title='Password'/>
                <TitledInput type="submit" value="Login"/>
            </form>
        )
    }
}

export default addHeaderBorder(addTitle(Signin, 'Login'));
