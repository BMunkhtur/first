import React from "react";
import styleone from "./styleone.css";
import { SocialIcon } from "react-social-icons";
import Navbarjs from "./Navbar";
import { Typewriter } from "react-simple-typewriter";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const About = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="">
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 0,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ff0000",
              animation: {
                enable: true,
                speed: 180,
                sync: true,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: {
                enable: true,
                minimumValue: 1,
              },
              animation: {
                enable: true,
                speed: 0.1,
                minimumValue: 1,
                sync: true,
                startValue: "min",
                destroy: "max",
              },
            },
            links: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outMode: "destroy",
              attract: {
                enable: false,
                rotateX: 1000,
                rotateY: 1000,
              },
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onhover: {
                enable: true,
                mode: "trail",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
                speed: 10,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
              trail: {
                delay: 0.009,
                quantity: 5,
              },
            },
          },
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className="container">
        <section class="home detail" id="home">
          <div class="content">
            <h2 style={{ color: "#007FFF" }}>
              Hi There,
              <br /> I'm Munkhtur <span>Bayarsaikhan</span>
            </h2>
            <h1 style={{ color: "#ffff" }}>
              I am the{" "}
              <span style={{ color: "#007FFF" }}>
                <Typewriter
                  words={[
                    "React Developer",
                    "UI Designer",
                    "Software Engineer",
                  ]}
                  loop={false}
                />
              </span>
            </h1>
            <a href="#about" class="btn">
              <span>About Me</span>
              <i class="fas fa-arrow-circle-down"></i>
            </a>
            <div class="socials">
              <ul class="social-icons">
                <li>
                  <SocialIcon network="twitter" />
                </li>
                <li>
                  {" "}
                  <SocialIcon network="google" />
                </li>
                <li>
                  <SocialIcon network="instagram" />
                </li>
                <li>
                  {" "}
                  <SocialIcon network="youtube" />
                </li>
                <li>
                  <SocialIcon network="facebook" />
                </li>
              </ul>
            </div>
          </div>
          <div class="image">
            <img class="tilt" src="./pic/bi.png" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
