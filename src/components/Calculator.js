import React, { Component } from 'react';

import Input from './Input';
import Button from './Button';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.onCurrentNumber1Change = this.onCurrentNumber1Change.bind(this);
        this.onCurrentNumber2Change = this.onCurrentNumber2Change.bind(this);
        // this.onPlus = this.onPlus.bind(this);
        // this.onMinus = this.onMinus.bind(this);
        // this.onMultiply = this.onMultiply.bind(this);
        // this.onDivide = this.onDivide.bind(this);

        this.state = {
            currentNumber1Value: '',
            currentNumber2Value: ''
        }
    };

    onCurrentNumber1Change(e) {
        this.setState({ currentNumber1Value: e.target.value })
        console.log(this.state.currentNumber1Value);
    }

    onCurrentNumber2Change(e) {
        this.setState({ currentNumber2Value: e.target.value })
        console.log(this.state.currentNumber2Value);
    }

    // onPlus() {
    //     const = this.state.currentNumber1Value + this.state.currentNumber2Value;
    // }

    render() {
        return (
            <div className="calculator">

                <Input
                    type="number"
                    id="number1"
                    placeholder="first number"
                    value={this.state.currentNumber1Value}
                    onChange={this.onCurrentNumber1Change}
                />

                <Input
                    type="number"
                    id="number2"
                    placeholder="second number"
                    value={this.state.currentNumber2Value}
                    onChange={this.onCurrentNumber2Change}
                />

                <Button onClick={this.onPlus}>+</Button>
                <Button onClick={this.onMinus}>-</Button>
                <Button onClick={this.onMultiply}>*</Button>
                <Button onClick={this.onDivide}>/</Button>

            </div>
        )
    }
}

export default Calculator;