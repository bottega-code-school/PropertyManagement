import React, { Component } from 'react';

import addHeaderNav from '../HOC/addHeaderNav';

class Newsletter extends Component {
    render() {
        return (
            <div>
                Newsletter body
            </div>
        )
    }
}

export default addHeaderNav(Newsletter, 'newsletter');