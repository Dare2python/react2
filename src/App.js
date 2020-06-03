import React from 'react';
import './App.css';
import { useState } from 'react';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

function App() {
  const [inputState, setInputState ] = useState({
    text: ""
  });

  let chars = (
    <div>
      {inputState.text.split('').map( (c, index) =>{
        return <CharComponent char={c} key={index}/>;
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
        />
        <p>Count: {inputState.text.length}</p>
        <ValidationComponent textLength={inputState.text.length} />
        {chars}
    </div>
  );
}

export default App;
