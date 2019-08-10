import React, { Component } from 'react';

class Input extends Component {
    
    render() {
        return (
            <div className='input-container'>
                <input
                    className='input'
                    type='number'
                    onChange={this.props.handleInput}
                    value={this.props.input}
                    placeholder='Enter value here'
                />
            </div>
        )
    }
}

export default Input;