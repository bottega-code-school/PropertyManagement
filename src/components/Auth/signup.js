import React, { Component } from 'react';
import addHeaderBorder from '../HOC/addHeaderBorder';

class Signup extends Component {
    render() {
        return (
            <div>
                Signup form 
            </div>
        )
    }
}

export default addHeaderBorder(Signup);