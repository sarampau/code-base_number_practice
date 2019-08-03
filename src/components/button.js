import React, { Component } from 'react';

class Button extends Component {

    render() {
        return (
            <div>
                <button className='button' 
                    onClick={this.props.handleClick}>Calculate</button>
            </div>
        )
    }
}

export default Button;