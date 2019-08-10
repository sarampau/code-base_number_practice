import React, { Component } from 'react';

class Button extends Component {

    render() {
        return (
            <div className='button-container'>
                <button className='button' 
                    onClick={this.props.handleClick}>Calculate</button>
            </div>
        )
    }
}

export default Button;