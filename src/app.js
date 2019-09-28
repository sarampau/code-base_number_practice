import React, { Component, useState } from 'react';
import Head from './components/head'
import Input from './components/input';
import Output from './components/output';
import Button from './components/button';
import Dropdown from './components/dropdown';
import Toggle from './components/toggle';
import './css/style.css';

function App() {

    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [baseNum, setBaseNum] = useState('');
    const [toggle, setToggle] = useState(false);

    const handleInput = e => setInput(e.target.value);

    const handleBaseNum = e => setBaseNum(e.target.value);

    const handleToggle = () => setToggle(!toggle);

    const handleClick = () => {
        let output1 = 0;
        let output2 = '';
        let multiplier = 1;
            if (toggle === false) {
                for (let i = input.length - 1; i >= 0; i--) {
                    if (input.length > 15) {
                        alert(`Input is ${input.length} digits long. Please reduce your input to 15 digits or less.`);
                        break;
                    }
                    if (input < 0) {
                        alert('Input must be a positive number.');
                        break;
                    }
                    if (baseNum == '') {
                        alert('You must enter a base number.');
                        break;
                    }
                    if (input[i] > baseNum - 1) {
                        alert('Input digits must be less than base number.');
                        break;
                    } 
                    else {
                        output1 += input[i] * multiplier;
                        multiplier = multiplier * baseNum;
                    }
                }
                setOutput(output1)
            } 
            else if (toggle = true) {
                while ( input > 0 ) { 
                    if (input.length > 15) {
                        alert(`Input is ${input.length} digits long. Please reduce your input to 15 digits or less.`);
                        break;
                    }
                    if (input < 0) {
                        alert('Input must be a positive number.');
                        break;
                    }
                    output2 = ( input % baseNum ) + output2; 
                    input = Math.floor( input / baseNum ); 
                    }
                setOutput(output2);
            }
    }

    return (
        <div>
            <Head />
            <div className='main-container'>
                <Toggle 
                    handleToggle={handleToggle}
                    toggle={toggle}
                />
                <div className='selectors'>
                    <Input 
                        handleInput={handleInput}
                        input={input}    
                    />
                    <Dropdown 
                        baseNum={baseNum}
                        handleBaseNum={handleBaseNum}
                    />
                </div>
                <Button 
                    handleClick={handleClick}
                />                   
                <Output 
                    output={output}
                />                    
            </div>
        </div>
    )
}

// Keep the class component for reference when comparing to hooks component.

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input: '',
//             output: '',
//             baseNum: ''
//             // toggle: false
//         }
//         this.handleInput = this.handleInput.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//         this.handleBaseNum = this.handleBaseNum.bind(this);
//         // this.handleToggle = this.handleToggle.bind(this);
//     }

//     handleInput(e) {
//         this.setState({
//             input: e.target.value
//         });
//     }

//     handleBaseNum(e) {
//         this.setState({
//             baseNum: e.target.value
//         })
//     }

//     // handleToggle() {
//     //     this.setState({
//     //         toggle: !this.state.toggle
//     //     })
//     // }

//     handleClick() {
//         let output1 = 0;
//         let output2 = '';
//         let multiplier = 1;
//         let input = this.state.input;
//         let baseNum = this.state.baseNum;
//         let toggle = this.state.toggle;
//             if (toggle === false) {
//                 for (let i = input.length - 1; i >= 0; i--) {
//                     if (input.length > 15) {
//                         alert(`Input is ${input.length} digits long. Please reduce your input to 15 digits or less.`);
//                         break;
//                     }
//                     if (input < 0) {
//                         alert('Input must be a positive number.');
//                         break;
//                     }
//                     if (baseNum == '') {
//                         alert('You must enter a base number.');
//                         break;
//                     }
//                     if (input[i] > baseNum - 1) {
//                         alert('Input digits must be less than base number.');
//                         break;
//                     } 
//                     else {
//                         output1 += input[i] * multiplier;
//                         multiplier = multiplier * baseNum;
//                     }
//                 }
//                 this.setState({
//                     output: output1
//                 })
//             } 
//             else if (toggle = true){
//                 while ( input > 0 ) { 
//                     if (input.length > 15) {
//                         alert(`Input is ${input.length} digits long. Please reduce your input to 15 digits or less.`);
//                         break;
//                     }
//                     if (input < 0) {
//                         alert('Input must be a positive number.');
//                         break;
//                     }
//                     output2 = ( input % baseNum ) + output2; 
//                     input = Math.floor( input / baseNum ); 
//                     }
//                 this.setState({
//                     output: output2
//                 })
//             }
//     }

//     render() {
//         // console.log(this.props.toggle)
//         return (
//             <div>
//                 <Head />
//                 <div className='main-container'>
//                     <Toggle 
//                         // handleToggle={this.handleToggle}
//                         // toggle={this.state.toggle}
//                     />
//                     <div className='selectors'>
//                         <Input 
//                             handleInput={this.handleInput}
//                             input={this.state.input}    
//                         />
//                         <Dropdown 
//                             baseNum={this.state.baseNum}
//                             handleBaseNum={this.handleBaseNum}
//                         />
//                     </div>
//                     <Button 
//                         handleClick={this.handleClick}
//                     />                   
//                     <Output 
//                         output={this.state.output}
//                     />                    
//                 </div>
//             </div>
//         )
//     }
// }

export default App;
