import React, { Component } from 'react';
import addHeaderBorder from '../HOC/addHeaderBorder';

class Signin extends Component {
    render() {
        return (
            <div>
                SIGN IN form goes here
            </div>
        )
    }
}

export default addHeaderBorder(Signin);