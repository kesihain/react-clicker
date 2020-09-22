import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  const handleClick = () =>{
    setCount(count+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Grab_%28application%29_logo.svg/302px-Grab_%28application%29_logo.svg.png" className="App-logo" alt="logo" width="200px"/>
        <p>
          I have trust issues with Ming Hao now
        </p>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Click</button>
      </header>
    </div>
  );
}

export default App;
