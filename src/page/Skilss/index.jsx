import Navbarjs from "../About/Navbar";
import Cardone from "./card";
import skillcss from "./style.module.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Skills = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const cards = [
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      name: "ExpressJS",
      icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
    },
    {
      name: "NodeJS",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "Redux",
      icon: "https://img.icons8.com/color/48/000000/redux.png",
    },
    {
      name: "Firebase",
      icon: "https://img.icons8.com/color/48/000000/firebase.png",
    },
    {
      name: "Android",
      icon: "https://img.icons8.com/fluency/48/000000/android-os.png",
    },
    {
      name: "MaterialUI",
      icon: "https://img.icons8.com/color/48/000000/material-ui.png",
    },
    {
      name: "ChakraUI",
      icon: "https://img.icons8.com/color/48/000000/chakra-ui.png",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      name: "Sass",
      icon: "https://img.icons8.com/color/48/000000/sass.png",
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },
    {
      name: "Java",
      icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
    },
    {
      name: "Kotlin",
      icon: "https://img.icons8.com/color/48/000000/kotlin.png",
    },
    {
      name: "PHP",
      icon: "https://img.icons8.com/offices/48/000000/php-logo.png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
    },
    {
      name: "C++",
      icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/color/48/000000/postgreesql.png",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    },
    {
      name: "Heroku",
      icon: "https://img.icons8.com/color/48/000000/heroku.png",
    },
    {
      name: "Netlify",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
    },
    {
      name: "DigitalOcean",
      icon: "https://img.icons8.com/ios-filled/48/0080FF/digitalocean.png",
    },
    {
      name: "jQuery",
      icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png",
    },
    {
      name: "Git VCS",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
  ];

  return (
    <div className={skillcss.container}>
      <Navbarjs className={skillcss.color} />
      <div>
        <h2 className={skillcss.text}>Skills</h2>
        <div className={skillcss.mid}>
          {cards.map((card, index) => (
            <Cardone key={index} card={card} />
          ))}

          <Particles
            id="tsparticles"
            options={{
              background: {
                color: {
                  value: "#0000",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 0,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: [
                    "#f5e712",
                    "#93c47d",
                    "#e9ae3b",
                    "#660000",
                    "#080856",
                    "#fa0087",
                  ],
                },

                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 0.1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 400,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 2, max: 3 },
                },
              },
              detectRetina: true,
            }}
            init={particlesInit}
            loaded={particlesLoaded}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
