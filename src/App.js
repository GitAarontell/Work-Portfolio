import React, {useEffect, useState} from 'react';
import './App.css';
import Title from './Title/Title';
import Skills from './Skills/Skills';

function App() {
  const [offSetY, setOffsetY] = useState(0);

  useEffect( () => {

    
    window.addEventListener('scroll', handleScroll,true);
 
    return window.removeEventListener('scroll', handleScroll);
  })

  const handleScroll = ()  => {
    setOffsetY(window.pageYOffset);

  } 
  
  return (
    <div   className="App">
      <Title offSetY={offSetY}></Title>
      <Skills></Skills>
    </div>
  );
}

export default App;
