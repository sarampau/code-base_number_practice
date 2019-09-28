import React, { Component, useState } from 'react';

// function Toggle() {
//     const [toggle, setToggle] = useState(false);
//     const toggleText = () => setToggle(!toggle);

//     console.log(toggle);

//     return (
//         <div className='toggle-container'>
//             <p>{!toggle ? 'Convert to Decimal' : 'Convert from Decimal'}</p>
//             <label className="switch">
//                 <input type="checkbox" onClick={() => toggleText}/>
//                 <span className="slider round"></span>
//             </label>
//             <p className='instructions'>{!toggle ? 'Enter a value, select a base number and convert the value to a decimal.' : 'Enter a value, select a base number and convert the value to that base system.'}</p>
//         </div>
//     )
// }



class Toggle extends Component {

    render() {
        return (
            <div className='toggle-container'>
                <p>{!this.props.toggle ? 'Convert to Decimal' : 'Convert from Decimal'}</p>
                <label className="switch">
                    <input type="checkbox" onClick={this.props.handleToggle}/>
                    <span className="slider round"></span>
                </label>
                <p className='instructions'>{!this.props.toggle ? 'Enter a value, select a base number and convert the value to a decimal.' : 'Enter a value, select a base number and convert the value to that base system.'}</p>
            </div>
        )
    }
}

export default Toggle;
