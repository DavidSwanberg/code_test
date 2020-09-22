import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Socials from './components/Socials';

function App() {
  const [user, setUser] = useState({});

  const makeAPICall = async () => {
    try {
      const response = await axios('https://www.randomuser.me/api')
      setUser(response.data.results[0])
    } catch (err) {
      console.error(err)
    }
  }
  
  useEffect(() => {
  makeAPICall()
  }, [])


  return (
    <div className="App">
      <Profile user={user}/>
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
