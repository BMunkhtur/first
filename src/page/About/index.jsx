import React from "react";
import style from "./style.css";

const About = () => {
  return (
    <div className="container">
      <section class="home" id="home">
        <div id="particles-js"></div>

        <div class="content">
          <h2>
            Hi There,
            <br /> I'm Munkhtur <span>Bayarsaikhan</span>
          </h2>
          <p>
            <span class="typing-text"></span>
          </p>
          <a href="#about" class="btn">
            <span>About Me</span>
            <i class="fas fa-arrow-circle-down"></i>
          </a>
          <div class="socials"></div>
        </div>
        <div class="image">
          <img draggable="false" class="tilt" src="./pic/bi.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
