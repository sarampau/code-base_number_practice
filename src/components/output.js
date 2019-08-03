import React, { Component } from 'react';

class Output extends Component {
    
    render() {
        return (
            <div>
                <h5 className='output-head'>Output:</h5>
                <p className='output-text'>{this.props.output}</p>
            </div>
        )
    }
}

export default Output;