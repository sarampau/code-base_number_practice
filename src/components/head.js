import React, { Component } from 'react';

class Head extends Component {

    render() {
        return (
            <div>
                <h1 className='head'>
                    Convert to Decimal
                </h1>
                <h3 className='instructions'>
                    Enter a value and its base number to output the value as a decimal.
                </h3>
            </div>
        )
    }
}

export default Head;