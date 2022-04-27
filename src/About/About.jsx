import React from "react";
import "./aboutStyles.css";

function About({offSetY}) {
  return (
    <div id='aboutContainer' className="aboutContainer" style={{ transform: `translateY(${offSetY * 0.8}px)` }}>
      <h2>About</h2>
      <div className="informationContainer"
        data-sal="slide-left"
        data-sal-delay='225'
        data-sal-duration='500'
        data-sal-easing="ease-out-bounce">
        <div className="photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhGiFe8oRDfMm4RQgXz7Mw03E-wUtvlTuHNrn2jJclf5zFi-9dmy9mkkOCdqdM2it8yg&usqp=CAU"
            alt=""
          />
        </div>
        <div className="info">
          <p>
            Hello, my name is Aaron. I love all things design and programming related.
            I have grown proficient with various tools like React, npm, and Git. I have built multiple
            kinds of projects using different languages, libraries and
            technologies. When I am not studying for school, I spend my time

          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
