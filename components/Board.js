import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { turn, board, onClick } = this.props;
    return (
      <div className='board'>
        {
          board.map((field, index) =>
            <Field player={turn} onClick={onClick.bind(null, index)} index={index} />
          )
        }
      </div>
    );
  }
}
