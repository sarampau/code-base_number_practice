import React, { Component } from 'react';

function Button(props) {

    return (
        <div className='button-container'>
            <button className='button' 
                onClick={props.handleClick}>Calculate</button>
        </div>
    )
}

// Keep class for reference when comparing to hooks.

// class Button extends Component {

//     render() {
//         return (
//             <div className='button-container'>
//                 <button className='button' 
//                     onClick={this.props.handleClick}>Calculate</button>
//             </div>
//         )
//     }
// }

export default Button;
