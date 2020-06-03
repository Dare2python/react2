import React from 'react';

function ValidationComponent(props) {
  const minimumLength = 5;
  let text = "Text too short";
  if(props.textLength >= minimumLength)
    text ="Text long enough";

  return (
    <div className="ValidationComponent">
        {text}
    </div>
  );
}

export default ValidationComponent;