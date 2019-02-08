import React, { Component } from 'react';

import Button from './Button';
import Input from './Input';

class Game extends Component {
    constructor(props) {
        super(props);


        this.state = {
            round: 1,
            numberToGuess: 0,
            numberForHint: 0,
            currentInputValue: ''
        }
    };

    onResetGame() {
        this.setState({ currentInputValue: '' });
    }

    render() {
        return (
            <div className="game">
                <Input />
                <Button onClick={this.onGo}>Go!</Button>
                <Button onClick={this.onResetGame}>Reset</Button>
            </div>
        )

    }
};

export default Game;

