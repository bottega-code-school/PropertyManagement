import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header__title">welcome to the HOA manager</div>
                <div className="header__subtitle">please login to continue</div>
            </header>
        )
    }
}

export default Header;