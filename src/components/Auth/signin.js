import React, { Component } from 'react';

import addHeaderBorder from '../HOC/addHeaderBorder';
import addTitle from '../HOC/addTitle';

import TitledInput from '../TitledInput';

import { Link } from 'react-router-dom';

class Signin extends Component {
    render() {
        return (
            <form onSubmit={() => this.props.history.push('/newsletter')} className="signin-form">
                <TitledInput type="text" placeholder='Enter Email' title='Email'/>
                <TitledInput type="password" placeholder='Enter Password' title='Password'/>
                <TitledInput type="submit" value="Login"/>
                <div className="signin-form__button-container">
                    <Link to="/reset">
                        <span className="button-secondary">Forgot Password</span>
                    </Link>
                    <Link to="/signup">
                        <span className="button-secondary">Not a member? Register Here</span>
                    </Link>
                </div>
            </form>
        )
    }
}

export default addHeaderBorder(addTitle(Signin, 'Login'));
