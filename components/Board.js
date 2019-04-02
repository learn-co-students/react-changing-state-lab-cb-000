import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  constructor(props) {
    super(props) ;
    this.showThing = this.showThing.bind(this) ;
  }
  showThing(index){
    if (this.props.board[index] === null) {
      return(<Field handleClick={this.props.handleClick} player={null} index={index} />)
    }
    else {
      return (<Field handleClick={this.props.handleClick} player={this.props.board[index]} index={index} />)
    }
  }

  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board" >
        <div>
          <Field handleClick={this.props.handleClick} player={this.props.board[0]} index={0} />
          <Field handleClick={this.props.handleClick} player={this.props.board[1]} index={1} />
          <Field handleClick={this.props.handleClick} player={this.props.board[2]} index={2} />
        </div>
        <div>
          <Field handleClick={this.props.handleClick} player={this.props.board[3]} index={3} />
          <Field handleClick={this.props.handleClick} player={this.props.board[4]} index={4} />
          <Field handleClick={this.props.handleClick} player={this.props.board[5]} index={5} />
        </div>
        <div>
          <Field handleClick={this.props.handleClick} player={this.props.board[6]} index={6} />
          <Field handleClick={this.props.handleClick} player={this.props.board[7]} index={7} />
          <Field handleClick={this.props.handleClick} player={this.props.board[8]} index={8} />
        </div>
      </div>
    );
  }
}
