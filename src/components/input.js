import React, { Component } from 'react';

class Input extends Component {
    
    render() {
        return (
            <div>
                <input
                    className='input'
                    type='number'
                    onChange={this.props.handleInput}
                    value={this.props.input}
                    placeholder='Enter binary number here'
                />
                <button className='button' onClick={this.props.handleClick}>Calculate</button>
            </div>
        )
    }
}

export default Input;