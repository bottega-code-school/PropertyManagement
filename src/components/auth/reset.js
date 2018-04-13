import React, { Component } from 'react';

import addHeaderBorder from '../HOC/addHeaderBorder';
import addTitle from '../HOC/addTitle';

import TitledInput from '../TitledInput';

import { Link } from 'react-router-dom';

class Reset extends Component {
    render() {
        return (
            <form className="signin-form">
                <TitledInput type="text" placeholder='Enter Email' title='Email'/>
                <TitledInput type="submit" value="Reset Password"/>
                <div className="signin-form__button-container">
                    <Link to="/signin">
                        <span className="button-secondary">Login</span>
                    </Link>
                </div>
            </form>
        )
    }
}

export default addHeaderBorder(addTitle(Reset, 'Reset Password'));
