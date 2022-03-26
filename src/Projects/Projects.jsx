import React from "react";
import "./projectsStyles.css";
import weatherAppPhoto from "../Images/WeatherApp.png";
import mannersPhoto from "../Images/mannersWeb.png";
import accountForm from "../Images/CreateAccount.png";

// lesson, position sticky only works when you first set top: 0 with it
function Projects() {
  return (
    <div className="projectsContainer flex">
      <h2>Projects</h2>
      <div className="imageContainer">
        <div className='alignmentContainer'>
          <a href="https://weather-radar.vercel.app/">
            <img className="projectPhoto" src={weatherAppPhoto} alt="" />
          </a>

          <a href="https://manners-website.vercel.app/#/">
            <img className="projectPhoto" src={mannersPhoto} alt="" />
          </a>

          <a href="https://create-account-form.vercel.app/">
            <img className="projectPhoto" src={accountForm} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
