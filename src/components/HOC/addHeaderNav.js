import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const addHeaderNav = (Child, active) => {
    return class extends Component {
        render() {
            return (
                <div className="add-nav">
                    <div className={`add-nav__items`}>
                        <Link to="/newsletter" className={`link ${active == 'newsletter' ? 'nav-selected' : ''}`}>
                            <span className="add-nav__text">Newsletter</span>
                        </Link>
                        <Link to="/requests" className={`link ${active == 'requests' ? 'nav-selected' : ''}`}>
                            <span className="add-nav__text">Requests</span>
                        </Link>
                    </div>
                    <Child {...this.props}/>
                </div>
            )
        }
    }
}

export default addHeaderNav;
