import React, { useState } from 'react';
import './app.css';
import Login from './components/Login';
import Main from './components/Main';
import { MainProvider } from './MainContext';

function App() {
  return (
    <MainProvider>
      <Main />
    </MainProvider>
  );
}

export default App;
