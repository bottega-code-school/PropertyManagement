import React, { Component } from 'react';

class TitledInput extends Component {
    render() {
        return (
            <div className="titled-input">
                <div className="titled-input__title">{this.props.title}</div>
                <input {...this.props}/>
            </div>
        )
    }
}

export default TitledInput;