import React, {useEffect, useState} from 'react';
import './App.css';
import Title from './Title/Title';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';


function App() {
  const [offSetY, setOffsetY] = useState(0);

  useEffect( () => {

    window.addEventListener('scroll', handleScroll,true);
    
 
    return window.removeEventListener('scroll', handleScroll);
  })

  // overflow-x: hidden causing issues with getting window y-offset, overflow-x was not working on mobile
  // so instead used the event object to get scrolltop since offset y not working with overflow hidden
  const handleScroll = (e)  => {
    if(e.target.scrollTop < 1000) {
      setOffsetY(e.target.scrollTop);
    }

  } 
  
  return (
    <div className="App">
      <Title offSetY={offSetY}></Title>
      <Skills></Skills> 
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
