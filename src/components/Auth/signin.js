import React, { Component } from 'react';
import addHeaderBorder from '../HOC/addHeaderBorder';
import addTitle from '../HOC/addTitle';

class Signin extends Component {
    render() {
        return (
            <div>
                SIGN IN form goes here
            </div>
        )
    }
}

export default addHeaderBorder(addTitle(Signin, 'Login'));
