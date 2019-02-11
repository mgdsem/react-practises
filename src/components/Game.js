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
            isGameRunning: true,
            round: 1,
            numberToGuess: this.generateNumber(),
            currentInputValue: '',
            gameStatusMessage: ''
        }
    };

    generateNumber() {
        return Math.floor((Math.random() * 100) + 1);
    }

    onInputChange(e) {
        this.setState({ currentInputValue: e.target.value })
    }

    onGo() {
        this.setState(prevState => ({
            round: prevState.round + 1
        }))

        this.setState({ currentInputValue: '' });

        if (Number(this.state.currentInputValue) > 100 || Number(this.state.currentInputValue) < 0) {
            this.setState({ gameStatusMessage: 'You were supposed to put a number between 0 and 100' });
        } else if (this.state.numberToGuess > Number(this.state.currentInputValue)) {
            this.setState({ gameStatusMessage: 'Try something higher' });
        } else if (this.state.numberToGuess < Number(this.state.currentInputValue)) {
            this.setState({ gameStatusMessage: "try something lower" });
        } else {
            this.setState({ gameStatusMessage: `You won in ${this.state.round} rounds!`, round: '', isGameRunning: false })
        };
    };

    onResetGame() {
        this.setState({
            currentInputValue: '',
            numberToGuess: this.generateNumber(),
            round: 1,
            isGameRunning: true,
            gameStatusMessage: ''
        });
    }

    render() {
        console.log(this.state.numberToGuess);
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
                {this.state.isGameRunning && (
                    <p>round: {this.state.round}</p>
                )}
                <p>{this.state.gameStatusMessage}</p>
            </div>
        )
    }
};

export default Game;

