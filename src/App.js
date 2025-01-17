import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import './assets/styles/reset.css';
import './assets/fonts/web/static/pretendard.css';

import Header from './components/Header';
import { Outlet } from 'react-router-dom';
function App() {
  const [hello, setHello] = useState("");


  /* 엑시오스 db 데이터 연결 */
  useEffect(() => {
    axios.get('/api/bulletinList').then((res) => {
      setHello('안녕');
      console.log(res.data);
    })
    // axios.get('/api/search').then((res) => {
    //   setHello('서치 테스트트');
    //   console.log(res.data);
    // })
  }, []);
 
  return (
    <div className="App">
    <Header />
    <div className="AppRouter">
    <Outlet /> 
    </div>
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
