import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [show, setMessage] = useState('Show Component')
  //to set Display Message
const [mess,setMess] = useState('');

  //function to handle the changes 
const handleChange = () => {

  if (show === 'Show Component') 
  {
    setMessage('Hide Component');
    setMess('Hi! How are You!!!');
  }

  else if (show === 'Hide Component') 
  {
    setMessage('Show Component')
    setMess('');
  }
}

return (
  <>
    <button onClick={handleChange}>{show}</button>
    <h1>{mess}</h1>
  </>
)
}

export default App;
