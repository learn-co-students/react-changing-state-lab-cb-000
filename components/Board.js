import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  constructor(props) {
    super(props) ;
    this.showThing = this.showThing.bind(this) ;
  }
  showThing(index){
    if (this.props.board[index] === null) {
      return(<Field handleClick={this.props.handleClick} player={null} />)
    }
    else {
      return (<Field handleClick={this.props.handleClick} player={this.props.board[index]} />)
    }
  }

  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board" >
        <tr>
          {this.showThing(0)}
          {this.showThing(1)}
          {this.showThing(2)}
        </tr>
        <tr>
          {this.showThing(3)}
          {this.showThing(4)}
          {this.showThing(5)}
        </tr>
        <tr>
          {this.showThing(6)}
          {this.showThing(7)}
          {this.showThing(8)}
        </tr>
      </div>
    );
  }
}
