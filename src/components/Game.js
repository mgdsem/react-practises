import React, { Component } from 'react';

import Button from './Button';
import Input from './Input';

class Game extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onGo = this.onGo.bind(this);
        this.onResetGame = this.onResetGame.bind(this);

        this.state = {
            round: 0,
            numberToGuess: Math.floor((Math.random() * 10) + 1),
            numberForHint: 0,
            currentInputValue: ''
        }
    };

    onInputChange(e) {
        this.setState({ currentInputValue: e.target.value })
        console.log(e.target.value);
    }

    onGo() {
        console.log(this.state.numberToGuess);
        this.setState(prevState => ({
            round: prevState.round + 1
        }))
    }

    onResetGame() {
        this.setState({ currentInputValue: '' });
        this.setState({ numberToGuess: Math.floor((Math.random() * 10) + 1) })

    }

    render() {
        return (
            <div className="game">
                <label htmlFor="number">put a number between 0 and 100</label>
                <Input
                    type="number"
                    id="number"
                    value={this.state.currentInputValue}
                    placeholder="just put here a number"
                    onChange={this.onInputChange}
                />
                <Button onClick={this.onGo}>Go!</Button>
                <Button onClick={this.onResetGame}>Reset</Button>
                <p>{this.state.round}</p>
            </div>
        )

    }
};

export default Game;

