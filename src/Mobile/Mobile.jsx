import React from 'react';
import Title from '../Title/Title';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import '../App.css';



function Mobile({handleClick, icons, sent, setSent}) {


  return (
    <div className="App">
      <Title offSetY={0} handleClick={handleClick}></Title>
      <Skills offSetY={0} icons={icons}></Skills>
      <Projects offSetY={0}></Projects>
      <About offSetY={0}></About>
      <Contact offSetY={0} sent={sent} setSent={setSent}></Contact>
    </div>
  );
}

export default Mobile;