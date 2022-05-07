import React, { useEffect, useState } from 'react';
import DeskMobSwitch from './Mobile/DeskMobSwitch.jsx';
import { DiBootstrap, DiReact, DiJqueryLogo, DiNodejs, DiGithubFull} from "react-icons/di";
import {SiRedux, SiCss3, SiMongodb} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai'
import './App.css';
import '../node_modules/sal.js/dist/sal.css';
import sal from 'sal.js'


function App() {
  const [offSetY, setOffsetY] = useState(0);
  let [sent, setSent] = useState(true);
  let [width, setWidth] = useState(window.innerWidth)
  let icons = [<DiJqueryLogo/>, <DiBootstrap/>, <DiReact/>, <DiGithubFull/>, <AiFillHtml5/>, <SiRedux/>, <SiCss3/>, <SiMongodb/>, <DiNodejs/>]

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleWindowSizeChange);
    };
  }, [])

  // overflow-x: hidden causing issues with getting window y-offset, overflow-x was not working on mobile
  // so instead used the event object to get scrolltop since offset y not working with overflow hidden

  let handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  let handleScroll = (e) => {
    if (e.target.scrollTop < 1000) {
      setOffsetY(e.target.scrollTop);
    }
  };

  let handleClick = () =>{
    setOffsetY(999);
  };

  sal();
  return (
    <div className="App">
      <DeskMobSwitch offSetY={offSetY} handleClick={handleClick} icons={icons} sent={sent} setSent={setSent} width={width}></DeskMobSwitch>
    </div>
  );
}

export default App;