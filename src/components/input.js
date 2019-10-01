import React, { Component } from 'react';

function Input(props) {

    return (
        <div className='input-container'>
            <input
                className='input'
                type='number'
                onChange={props.handleInput}
                value={props.input}
                placeholder='Enter value here'
            />
        </div>
    )
}

// Keep class for reference when comparing to hooks.

// class Input extends Component {
    
//     render() {
//         return (
//             <div className='input-container'>
//                 <input
//                     className='input'
//                     type='number'
//                     onChange={this.props.handleInput}
//                     value={this.props.input}
//                     placeholder='Enter value here'
//                 />
//             </div>
//         )
//     }
// }

export default Input;
