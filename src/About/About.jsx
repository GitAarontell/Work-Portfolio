import React from "react";
import "./aboutStyles.css";

function About() {
  return (
    <div className="aboutContainer">
      <h2>About</h2>
      <div className="informationContainer">
        <div className="photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhGiFe8oRDfMm4RQgXz7Mw03E-wUtvlTuHNrn2jJclf5zFi-9dmy9mkkOCdqdM2it8yg&usqp=CAU"
            alt=""
          />
        </div>
        <div className="info">
          <p> Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quaerat, voluptates adipisci. Numquam 
              velit tempora incidunt maiores deleniti harum accusamus! 
              Optio ipsum molestiae fugit repellendus excepturi 
              temporibus beatae magnam sit reprehenderit. Lorem ipsum 
              dolor sit amet consectetur adipisicing elit. Illo dolorem
              voluptatum rem ipsam sapiente commodi nihil architecto 
              voluptatem, ab eius possimus veniam autem, similique 
              ducimus voluptates repellat doloremque placeat aliquid!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
