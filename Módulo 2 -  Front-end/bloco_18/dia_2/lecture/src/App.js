import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ number, setNumber ] = useState(0);

   useEffect(() => {
     setInterval(() => {
       const newNumber = Math.round(Math.random() * 100);
       setNumber(newNumber)
     }, 10000)
  }, [number])
  
  return (
    <div className="App">
      <header className="App-header">
        { number }
      </header>
    </div>
  );
}

export default App;
