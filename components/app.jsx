import React, { useState } from 'react';
import App from './components/App'


let App = () => {
  let [username, setUsername] = useState('');
  let [msg, setMsg] = useState('');
  let [chirps, setChirps] = useState([
    { username: 'Willie', msg: 'What is up?' },
    { username: 'Kevin Savage', msg: 'Whoopady Scoop' },
    { username: 'Mr.West', msg: 'Poopady Scoop' },
  ]);





export default App;