import React, { useEffect, useState } from 'react';
import Title from './Title/Title';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import { DiBootstrap, DiReact, DiJqueryLogo, DiNodejs, DiGithubFull} from "react-icons/di";
import {SiRedux, SiCss3, SiMongodb} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai'
import './App.css';
import '../node_modules/sal.js/dist/sal.css';
import sal from 'sal.js'


function App() {
  const [offSetY, setOffsetY] = useState(0);
  let [sent, setSent] = useState(true);

  let icons = [<DiJqueryLogo/>, <DiBootstrap/>, <DiReact/>, <DiGithubFull/>, <AiFillHtml5/>, <SiRedux/>, <SiCss3/>, <SiMongodb/>, <DiNodejs/>]

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return window.removeEventListener('scroll', handleScroll);
  })

  // overflow-x: hidden causing issues with getting window y-offset, overflow-x was not working on mobile
  // so instead used the event object to get scrolltop since offset y not working with overflow hidden
  let handleScroll

  if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
    handleScroll = (e) => {
      if (e.target.scrollTop < 500) {
        setOffsetY(e.target.scrollTop);
      } 
    }
  }else {
    handleScroll = (e) => {
      if (e.target.scrollTop < 1000) {
        setOffsetY(e.target.scrollTop);
      } 
    }
  }

  sal();

  return (
    <div className="App">
      <Title offSetY={offSetY} setOffsetY={setOffsetY}></Title>
      <Skills offSetY={offSetY} icons={icons}></Skills>
      <Projects offSetY={offSetY}></Projects>
      <About offSetY={offSetY}></About>
      <Contact offSetY={offSetY} sent={sent} setSent={setSent}></Contact>
    </div>
  );
}

export default App;
