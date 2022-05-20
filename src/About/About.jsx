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
        <div className="info">
          <p>
            Hello, my name is Aaron. I love all things design and programming related.
            I have grown proficient with various tools like React, npm, and Git. I have built multiple
            kinds of projects using different languages, libraries and
            technologies. I am currently pursuing a bachelors in computer science at Oregon State University, and hope to graduate in the Spring of 2023. 

          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
