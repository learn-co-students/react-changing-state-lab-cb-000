import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';
const winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X',
      winner: undefined
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (event) {
    event.preventDefault() ;
    this.setState({
      board: [null, null, null, null, null, null, null, null, null]
    })
  }

  handleClick (i, event) {
    event.preventDefault() ;
    var temp = this.state.board ;
    temp[i] = this.state.turn ;
    this.setState({
      board: temp
    })
    this.state.turn == 'X' ? this.setState({turn: 'O'}) : this.setState({turn: 'X'}) ;
    this.getWinner() ;
  }

  getWinner () {
    if (winCombos.some(function(combo){
      return(
        combo.every(function(space){
          return(
            this.state.board[space] == 'X'
          )
        })
      )
    })){this.setState({winner: 'X wins'})}
    if (winCombos.some(function(combo){
      return(
        combo.every(function(space){
          return(
            this.state.board[space] == 'O'
          )
        })
      )
    })){this.setState({winner: 'O wins'})}
    if(this.isComplete() && this.state.winner == undefined){
      this.setState({
        winner: 'Tie'
      })
    }
  }

  isComplete() {
    if(this.state.board.includes(null)){
      return false ;
    }
    else{
      return true ;
    }
  }

  render () {
    return (
      <div className="game" >
        <Status winner={this.state.winner} />
        <Board board={this.state.board} handleClick={this.handleClick}  />
        <button className="game__reset" onClick={event => this.handleReset(event)}>
          Reset
        </button>
      </div>
    );
  }
}
