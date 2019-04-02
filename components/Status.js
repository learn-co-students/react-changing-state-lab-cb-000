import React from 'react';

export default class Status extends React.Component {
  render () {
    const { winner } = this.props;
    return (
      <span className="status" >
        {this.props.winner}
      </span>
    );
  }
}
