import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import logo from './logo.svg';
import './App.css';

const socket = io('http://localhost:9000');

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`connection establised: ID[${socket.id}]`);
    });

    socket.on('testing', (data) => {
      setTime(data);
    });

    socket.on('disconnect', () => {
      console.log(`connection terminated`);
    });
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{time}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
