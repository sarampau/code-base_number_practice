import React, { Component } from 'react';

function Output(props) {

    return (
        <div className='output-container'>
            {props.output !== '' && <p className='output-text'>{`Your input is equal to ${props.output}`}</p>}
        </div>
    )
}

// Keep class for reference when comparing to hooks.

// class Output extends Component {
    
//     render() {
//         return (
//             <div className='output-container'>
//                 {this.props.output !== '' && <p className='output-text'>{`Your input is equal to ${this.props.output}`}</p>}
//             </div>
//         )
//     }
// }

export default Output;
