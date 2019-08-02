import React, { Component } from 'react';
import Head from './components/head'
import Input from './components/input';
import Output from './components/output';
import Dropdown from './components/dropdown';
import './css/style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            output: '',
            baseNum: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleNumSys = this.handleNumSys.bind(this);
    }

    handleInput(e) {
        this.setState({
            input: e.target.value
        });
    }

    handleNumSys(e) {
        this.setState({
            baseNum: e.target.value
        })
    }

    handleClick() {
        let output = 0;
        let multiplier = 1;
        let input = this.state.input;
        let baseNum = this.state.baseNum;
        for (let i = input.length - 1; i >= 0; i--) {
            if (input < 0) {
                alert('Input must be a positive number.');
                break;
            }
            if (input[i] > baseNum - 1) {
                alert('Input does not match with base number system.');
                break;
            } else {
                output+= input[i] * multiplier;
                multiplier = multiplier * baseNum;
            }
        }
        this.setState({
            output: output,
            input: '',
            baseNum: ''
        })
    }

    render() {
        return (
            <div>
                <Head />
                <div className='form'>
                    <Input 
                        handleInput={this.handleInput}
                        handleClick={this.handleClick}
                        input={this.state.input}    
                    />
                    <Dropdown 
                        baseNum={this.state.baseNum}
                        handleNumSys={this.handleNumSys}
                    />
                    <Output 
                        output={this.state.output}
                    />
                </div>
            </div>
        )
    }
}

export default App;