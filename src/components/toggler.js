import React, { Component } from 'react';

function Toggler(props) {

    return (
        <div className='toggle-container'>
            <p>{props.toggle === false ? 'Convert to Decimal' : 'Convert from Decimal'}</p>
            <label className="switch">
                <input type="checkbox" onClick={props.handleToggle}/>
                <span className="slider round"></span>
            </label>
            <p className='instructions'>{props.toggle === false ? 'Enter a value, select a base number and convert the value to a decimal.' : 'Enter a value, select a base number and convert the value to that base system.'}</p>
        </div>
    )
}

// Keep class for reference when comparing to hooks.

// class Toggle extends Component {

//     render() {
//         return (
//             <div className='toggle-container'>
//                 <p>{!this.props.toggle ? 'Convert to Decimal' : 'Convert from Decimal'}</p>
//                 <label className="switch">
//                     <input type="checkbox" onClick={this.props.handleToggle}/>
//                     <span className="slider round"></span>
//                 </label>
//                 <p className='instructions'>{!this.props.toggle ? 'Enter a value, select a base number and convert the value to a decimal.' : 'Enter a value, select a base number and convert the value to that base system.'}</p>
//             </div>
//         )
//     }
// }

export default Toggler;
