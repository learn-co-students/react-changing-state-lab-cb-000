import React from 'react';

export default class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    return (
      <button
        className = 'field'
        disabled  = {!!player}  //If this square/field has been played, disabled=true
        onClick   = {onClick}
      >
        {player}
      </button>
    );
  }
}
