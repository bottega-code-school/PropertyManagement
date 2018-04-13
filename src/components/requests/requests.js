import React, { Component } from 'react';

import addHeaderNav from '../HOC/addHeaderNav';

class Requests extends Component {
    render() {
        return (
            <div>
                requests body
            </div>
        )
    }
}

export default addHeaderNav(Requests, 'requests');