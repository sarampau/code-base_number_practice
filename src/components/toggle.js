import React, { Component } from 'react';

class Toggle extends Component {

    render() {
        return (
            <div className='column'>
                <div className='toggle-container'>
                    <p>{!this.props.toggle ? 'Convert to Decimal' : 'Convert from Decimal'}</p>
                    <label className="switch">
                        <input type="checkbox" onClick={this.props.handleToggle}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className='instructions'>
                    <p>{!this.props.toggle ? 'Enter a value, select a base number and convert the value to a decimal.' : 'Enter a value, select a base number and convert the value to that base system.'}</p>
                </div>
            </div>
        )
    }
}

export default Toggle;