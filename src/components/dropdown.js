import React, { Component } from 'react';

function Dropdown(props) {
    
    return (
        <div className='dropdown-container'>
            <select className='dropdown' value={props.baseNum} onChange={props.handleBaseNum}>
                <option value='' defaultValue>Select a base number</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
            </select>
        </div>
    )
}

// Keep class for reference when comparing to hooks.

// class Dropdown extends Component {

//     render() {
//         return (
//             <div className='dropdown-container'>
//                 <select className='dropdown' value={this.props.baseNum} onChange={this.props.handleBaseNum}>
//                     <option value='' defaultValue>Select a base number</option>
//                     <option value='2'>2</option>
//                     <option value='3'>3</option>
//                     <option value='4'>4</option>
//                     <option value='5'>5</option>
//                     <option value='6'>6</option>
//                     <option value='7'>7</option>
//                     <option value='8'>8</option>
//                     <option value='9'>9</option>
//                 </select>
//             </div>
//         );
//     }
// }

export default Dropdown;
