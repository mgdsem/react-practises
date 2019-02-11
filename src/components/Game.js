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
            roundName: 'round:',
            round: 1,
            numberToGuess: Math.floor((Math.random() * 100) + 1),
            currentInputValue: '',
            gameStatusMessage: ''
        }
    };

    onInputChange(e) {
        this.setState({ currentInputValue: e.target.value })
        console.log(e.target.value);
    }

    onGo() {
        this.setState(prevState => ({
            round: prevState.round + 1
        }))
        console.log(this.state.numberToGuess);
        console.log(this.state.currentInputValue);

        this.setState({ currentInputValue: '' });

        if (Number(this.state.currentInputValue) > 100 || Number(this.state.currentInputValue) < 0) {
            this.setState({ gameStatusMessage: 'You were supposed to put a number between 0 and 100' });
        } else if (this.state.numberToGuess > Number(this.state.currentInputValue)) {
            this.setState({ gameStatusMessage: 'Try something higher' });
        } else if (this.state.numberToGuess < Number(this.state.currentInputValue)) {
            this.setState({ gameStatusMessage: "try something lower" });
        } else {
            this.setState({ gameStatusMessage: `You won in ${this.state.round} rounds!` })
            this.setState({ round: '', roundName: '' })
        };
    };

    onResetGame() {
        this.setState({ currentInputValue: '' });
        this.setState({ numberToGuess: Math.floor((Math.random() * 100) + 1) });
        this.setState({ round: 1 });
        this.setState({ roundName: 'round:' })
        this.setState({ gameStatusMessage: '' });
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
                <p>{this.state.roundName}{this.state.round}</p>
                <p>{this.state.gameStatusMessage}</p>
            </div>
        )
    }
};

export default Game;

