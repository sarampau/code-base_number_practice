import React, { Component } from 'react';

function Head(props) {

    return (
        <div>
            <h1 className='head'>
                Base Number Converter
            </h1>
            <h3 className='head-instructions'>
                Enter a value to convert it to or from a decimal value.
            </h3>
        </div>
    )
}

// Keep class for reference when comparing to hooks.

// class Head extends Component {

//     render() {
//         return (
//             <div>
//                 <h1 className='head'>
//                     Base Number Converter
//                 </h1>
//                 <h3 className='head-instructions'>
//                     Enter a value to convert it to or from a decimal value.
//                 </h3>
//             </div>
//         )
//     }
// }

export default Head;
