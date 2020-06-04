import React from 'react';
import './App.css';
import { useState } from 'react';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

function App() {
  const [inputState, setInputState ] = useState({
    text: ""
  });

  const deleteChar = index => {
    let r = inputState.text.slice(0, index);
    r = r + inputState.text.slice(index+1);
    setInputState({
      text: r
    });
  };

  const chars = (
    <div>
      {inputState.text.split('').map( (c, index) =>{
        return <CharComponent 
          char={c} 
          key={index} 
          click={() => deleteChar(index)}
          />;
      })}
    </div>
  );

  return (
    <div className="App">
        <input type="text" onChange={(event) => {
            setInputState({
              text: event.target.value
            });
          }}
          value={inputState.text}
        />
        <p>Count: {inputState.text.length}</p>
        <ValidationComponent textLength={inputState.text.length} />
        {chars}
    </div>
  );
}

export default App;
