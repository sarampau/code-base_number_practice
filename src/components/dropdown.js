import React, { Component } from 'react';

class Dropdown extends Component {

    render() {
        return (
            <div>
                <select className='selector' value={this.props.baseNum} onChange={this.props.handleNumSys}>
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
        );
    }
}

export default Dropdown;