import React from 'react';
import './App.css';
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
