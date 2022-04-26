import React from "react";
import "./skills.css";
import Icons from "../Icons/Icons.jsx";

function Skills({offSetY, icons }) {
  let delay = [300, 500, 700, 900, 1100, 1300, 1500, 1700, 1900]
  return (
    <div className="skills" style={{ transform: `translateY(${offSetY * 0.8}px)` }}>

      <h2>Skills</h2>

      <div 
        id='skillsContainer' className="innerContainer">
        {icons.map((icon, index) => {
          return <Icons icon={icon} delay={delay[index]} key={index}></Icons>
        })}
      </div>
    </div>
  );
}

export default Skills;
