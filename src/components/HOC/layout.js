import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>welcome to the HOA manager</h1>
                    <h2>please login to continue</h2>
                </header>
                {this.props.children}
                footer...
            </div>
        )
    }
}

export default Layout;