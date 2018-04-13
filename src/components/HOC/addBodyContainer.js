import React, { Component } from 'react';

const addBodyContainer = Child => {
    return class extends Component {
        render() {
            return (
                <div className="add-body-container">
                    <Child {...this.props}/>
                </div>
            )
        }
    }
}

export default addBodyContainer;
