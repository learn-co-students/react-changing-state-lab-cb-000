import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    debugger
    return (
      <div className="board">
	      {
	      	board.map((player, index) => <Field key={index} player={player} onClick={onClick.bind(null,index)} />)
	      }
      </div>
    );
  }
}
