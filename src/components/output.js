import React, { Component } from 'react';

class Output extends Component {
    
    render() {
        return (
            <div>
                {this.props.output !== '' && <p className='output-text'>{`Your input is equal to ${this.props.output}.`}</p>}
            </div>
        )
    }
}

export default Output;