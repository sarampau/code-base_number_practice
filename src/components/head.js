import React, { Component } from 'react';

class Head extends Component {

    render() {
        return (
            <div>
                <h1 className='head'>
                    Base Number Converter
                </h1>
                <h3 className='head-instructions'>
                    Enter a value to convert it to or from a decimal value.
                </h3>
            </div>
        )
    }
}

export default Head;
