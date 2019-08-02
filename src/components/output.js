import React, { Component } from 'react';

class Output extends Component {
    
    render() {
        return (
            <div className='output'>
                <h5>Output:</h5>
                <p className='output-text'>{this.props.output}</p>
            </div>
        )
    }
}

export default Output;