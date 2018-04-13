import React, { Component } from 'react';

import addHeaderBorder from '../HOC/addHeaderBorder';
import addTitle from '../HOC/addTitle';

import TitledInput from '../TitledInput';

import { Link } from 'react-router-dom';

class Signup extends Component {
    render() {
        return (
            <form className="signin-form">
                <TitledInput type="text" placeholder='Full Name' title='Full Name'/>
                <TitledInput type="text" placeholder='Unit Number' title='Unit #'/>
                <TitledInput type="email" placeholder='Email' title='Email'/>
                <TitledInput type="password" placeholder='Password' title='Password'/>
                <TitledInput type="submit" value="Create Account"/>
                <div className="signin-form__button-container">
                    <Link to="/signin">
                        <span className="button-secondary">Already Registered? Login</span>
                    </Link>
                </div>
            </form>
        )
    }
}

export default addHeaderBorder(addTitle(Signup, 'New User'));

