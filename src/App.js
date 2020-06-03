import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputState, setInputState ] = useState({
    count: 0
  });

  // const setCount = (event) => {
  //   setInputState({
  //     count: event.target.value.length  
  //   });
  // };

  return (
    <div className="App">
        <input type="text" onChange={(event) => {
            setInputState({
              count: event.target.value.length  
            });
          }}
        />
        <p>Count: {inputState.count}</p>
    </div>
  );
}

export default App;
