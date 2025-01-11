import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [hello, setHello] = useState("");
 
  useEffect(() => {
    axios.get('/api/bulletinList').then((res) => {
      setHello('안녕');
      console.log(res.data);
    })
  }, []);
  
  return (
    
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">{hello}</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
    
  );
}

export default App;
