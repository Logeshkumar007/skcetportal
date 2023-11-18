import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [show, setMessage] = useState('click')
    //to set Display Message
  const [mess,setMess] = useState('Kaioken');
  const [vale,setVal] = useState(0);

    //function to handle the changes 
  const handleChange = () => {

    if (vale>=0 &&vale<3) 
    {
      setVal(vale+1);
      setMess('Kaioken');
    }
    
    else if (vale>=3) 
    {
      if(vale==6)
      {
        setVal(1); 
      }
      else
      {
        setVal(vale+1);

      }
      
      
      
      setMess('SuperSaiyan');
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
