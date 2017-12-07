import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  constructor(props){
    super(props)
  }


  render () {
    const { board, onClick } = this.props;
    return (
      <div>
      <table>
  <tr>
      <td><Field /></td>
      <td><Field /></td>
      <td><Field /></td>
  </tr>
  <tr>
      <td><Field /></td>
      <td><Field /></td>
      <td><Field /></td>
  </tr>
  <tr>
      <td><Field /></td>
      <td><Field /></td>
      <td><Field /></td>
  </tr>
</table>
      </div>
    );
  }
}
