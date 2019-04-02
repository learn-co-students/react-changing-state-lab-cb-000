import React from 'react';

const Field = (props) => {
  var disabled ;
  if (!!props.player){
    disabled = true
  }
  else{
    disabled = false
  }
    return (
      <button className="field" disabled={disabled} onClick={event => props.handleClick(props.index, event) } >
        {props.player}
      </button>
    );
}
//this is a field
export default Field
