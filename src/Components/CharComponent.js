import React from 'react';

function CharComponent(props) {
  return (
    <div className="CharComponent" onClick={props.click}>
        {props.char}
    </div>
  );
}

export default CharComponent;