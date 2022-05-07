import React from 'react';
import Title from '../Title/Title';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import '../App.css';



function DeskTop({offSetY, handleClick, icons, sent, setSent}) {


  return (
    <div className="App">
      <Title offSetY={offSetY} handleClick={handleClick}></Title>
      <Skills offSetY={offSetY} icons={icons}></Skills>
      <Projects offSetY={offSetY}></Projects>
      <About offSetY={offSetY}></About>
      <Contact offSetY={offSetY} sent={sent} setSent={setSent}></Contact>
    </div>
  );
}

export default DeskTop;