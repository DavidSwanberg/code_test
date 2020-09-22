import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Socials from './components/Socials';

function App() {

  return (
    <div className="App">
      <Profile />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
