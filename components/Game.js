import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [
        null, null, null,
        null, null, null,
        null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.isComplete = this.isComplete.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      turn: 'X'
    })
  }

  handleClick (i, ev) {
    ev.preventDefault();
    //make a copy of the board
    const board = this.state.board;
    board.splice(i, 1, this.state.turn);
    //switch player token based on previous value
    const turn = this.state.turn === 'X' ? 'O' : 'X';
    //shorthand for { board: board, turn: turn}
    this.setState({ board, turn});
  }

  getWinner () {
    const results = solutions.map(
      //solution = [0,1,2]
      (solution) => solution.map((i) => this.state.board[i]).join('')
    );

    const row = results.find((result) => {
      return result === "XXX" || result === "OOO"
    });

    return row && row[0];
  }

  isComplete () {
    return this.state.board.every((field) => field);
  }

  render () {
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick} />
        { this.isComplete() ? <Status winner={this.getWinner()} /> : null}
        <button className='game__reset' onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
