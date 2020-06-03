import React from 'react';
import './App.css';
import { useState } from 'react';
import ValidationComponent from './Components/ValidationComponent';

function App() {
  const [inputState, setInputState ] = useState({
    count: 0
  });

  return (
    <div className="App">
        <input type="text" onChange={(event) => {
            setInputState({
              count: event.target.value.length  
            });
          }}
        />
        <p>Count: {inputState.count}</p>
        <ValidationComponent textLength={inputState.count} />
    </div>
  );
}

export default App;
