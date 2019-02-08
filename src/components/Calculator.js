import React, { Component } from 'react';

import Input from './Input';
import Button from './Button';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.onCurrentNumber1Change = this.onCurrentNumber1Change.bind(this);
        this.onCurrentNumber2Change = this.onCurrentNumber2Change.bind(this);
        this.onPlus = this.onPlus.bind(this);
        this.onMinus = this.onMinus.bind(this);
        this.onMultiply = this.onMultiply.bind(this);
        this.onDivide = this.onDivide.bind(this);
        this.onReset = this.onReset.bind(this);

        this.state = {
            currentNumber1Value: '',
            currentNumber2Value: '',
            result: 0
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

    onPlus() {
        const plusResult = Number(this.state.currentNumber1Value) + Number(this.state.currentNumber2Value);
        console.log(plusResult);

        this.setState({ result: plusResult });
    }

    onMinus() {
        const minusResult = Number(this.state.currentNumber1Value) - Number(this.state.currentNumber2Value);
        console.log(minusResult);

        this.setState({ result: minusResult });
    }

    onMultiply() {
        const multiplyResult = Number(this.state.currentNumber1Value) * Number(this.state.currentNumber2Value);
        console.log(multiplyResult);

        this.setState({ result: multiplyResult });
    }

    onDivide() {
        const divideResult = Number(this.state.currentNumber1Value) / Number(this.state.currentNumber2Value);
        console.log(divideResult);

        this.setState({ result: divideResult });
    }

    onReset() {
        this.setState({ currentNumber1Value: '', currentNumber2Value: '', result: 0 });
    }




    render() {

        return (
            <div className="calculator">

                <Input
                    type="number"
                    id="number1"
                    placeholder="0"
                    value={this.state.currentNumber1Value}
                    onChange={this.onCurrentNumber1Change}
                />

                <Input
                    type="number"
                    id="number2"
                    placeholder="0"
                    value={this.state.currentNumber2Value}
                    onChange={this.onCurrentNumber2Change}
                />

                <Button onClick={this.onPlus}>+</Button>
                <Button onClick={this.onMinus}>-</Button>
                <Button onClick={this.onMultiply}>*</Button>
                <Button onClick={this.onDivide}>/</Button>
                <Button onClick={this.onReset}>Reset</Button>

                <p>{this.state.result}</p>
            </div>
        )
    }
}

export default Calculator;