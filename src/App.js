import logo from "./logo.svg";
import "./App.css";
import Parti from "./pages/particles";
import { Typewriter } from "react-simple-typewriter";

function App() {
  return (
    <div className="App">
      <nav class="lil">
        <div class="max-width">
          <div class="logo">
            <a href="#">
              Munkhtur<span>Br.</span>
            </a>
          </div>
          <ul class="menu">
            <li>
              <a href="#home" class="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#services" class="menu-btn">
                Services
              </a>
            </li>
            <li>
              <a href="#skills" class="menu-btn">
                Skills
              </a>
            </li>
            <li>
              <a href="#teams" class="menu-btn">
                My project
              </a>
            </li>
            <li>
              <a href="#contact" class="menu-btn">
                Contact
              </a>
            </li>
          </ul>
          <div class="menu-btn">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </nav>
      <section class="home" id="home">
        <div class="max-width">
          <div class="home-content">
            <div class="text-1">Hello, my name is</div>
            <div class="text-2">Bayarsaikhan Munkhtur</div>
            <div class="text-3">
              <h1>
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
            </div>
            <div class="classbox">
              <a href="#">Hire me</a>
            </div>
          </div>
        </div>
      </section>

      <article class="about py-5 about" id="about">
        <div class="row justify-content-center d-none d-sm-flex">
          <div class="col-12 col-xl-9 align-self-center px-3 px-xl-0">
            <div class="card">
              <div class="card_content">
                <div class="card_front">
                  <h3 class="card_title mb-0">About me</h3>
                </div>
                <div class="card_back align-items-center">
                  <div class="d-flex align-items-center">
                    <div class="about-content">
                      <div class="column left">
                        <img src="/pic/aaaa.jpg" alt="img" />
                      </div>
                      <div class="column right">
                        <div class="text">
                          I'm Munkhtur.
                          <span class="typing-2"></span>
                        </div>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Eius veniam quas quam ad recusandae ipsam
                          consequuntur vitae magni! Laborum consequatur
                          quibusdam sequi veniam ipsam accusamus hic
                          dignissimos, deserunt veritatis autem Lorem, ipsum
                          dolor sit amet consectetur adipisicing elit. Eius
                          veniam quas quam ad recusandae ipsam consequuntur
                        </p>
                        <a href="cv/sample.pdf" download="cv/sample.pdf">
                          Download CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-sm-none small-version">
          <div class="col-12 px-5">
            <h3>About me</h3>
            <p>
              Lorem ipsum dolor sit amet, ius et vidisse aliquip, viderer
              invenire duo ad. Alii salutandi nam te. Inani semper integre ex
              eam. Usu no reque copiosae. Id ornatus consetetur his, eum zril
              quaerendum ut, an dico rebum definitionem duo.
            </p>
          </div>
        </div>
      </article>

      <section class="services" id="services">
        <div class="max-width">
          <h2 class="title">My services</h2>
          <div class="serv-content"></div>
        </div>
        <div class="container">
          <div class="box">
            <span id="first"> </span>
            <div class="content">
              <h2>UI Designer</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                veniam quas quam ad recusandae ipsam consequuntur vitae magni!
                Laborum consequatur quibusdam sequi veniam ipsam accusamus hic
                dignissimos, deserunt veritatis autem
              </p>
            </div>
          </div>
          <div class="box">
            <span id="second"></span>
            <div class="content">
              <h2>React developer</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                veniam quas quam ad recusandae ipsam consequuntur vitae magni!
                Laborum consequatur quibusdam sequi veniam ipsam accusamus hic
                dignissimos, deserunt veritatis autem
              </p>
            </div>
          </div>
          <div class="box">
            <span id="third"></span>
            <div class="content">
              <h2>Software Engineer</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                veniam quas quam ad recusandae ipsam consequuntur vitae magni!
                Laborum consequatur quibusdam sequi veniam ipsam accusamus hic
                dignissimos, deserunt veritatis autem
              </p>
            </div>
          </div>
          <div class="box">
            <span id="fourth"></span>
            <div class="content">
              <h2>Lorem</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                veniam quas quam ad recusandae ipsam consequuntur vitae magni!
                Laborum consequatur quibusdam sequi veniam ipsam accusamus hic
                dignissimos, deserunt veritatis autem
              </p>
            </div>
          </div>
          <div class="box">
            <span id="fifth"></span>
            <div class="content">
              <h2>Lorem</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                veniam quas quam ad recusandae ipsam consequuntur vitae magni!
                Laborum consequatur quibusdam sequi veniam ipsam accusamus hic
                dignissimos, deserunt veritatis autem
              </p>
            </div>
          </div>
          <div class="box">
            <span id="sixth"></span>
            <div class="content">
              <h2>Lorem</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                veniam quas quam ad recusandae ipsam consequuntur vitae magni!
                Laborum consequatur quibusdam sequi veniam ipsam accusamus hic
                dignissimos, deserunt veritatis autem
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="skills" id="skills">
        <div class="max-width">
          <h2 class="title">My skills</h2>
          <div class="skills-content">
            <div class="column left">
              <div class="text">My creative skills & experiences.</div>
              <p>
                Since beginning my journey as a freelance developer nearly 1
                month ago, I’ve done remote work for agencies, consulted for
                startups, and collaborated with talented people to create web
                products for both business and consumer use. I create successful
                responsive websites that are fast, easy to use, and built with
                best practices. The main area of my expertise is front-end
                development, HTML, CSS, JS, building small and medium web apps,
                custom plugins, features, animations, and coding interactive
                layouts. I also have full-stack developer experience with
                popular open-source CMS like (WordPress, bubble.io and others) .
                Visit my
                <a
                  href="https://www.facebook.com/munkhtur.bayarsaihan"
                  target="-blank"
                  id="link"
                >
                  Facebook
                </a>
                for more details
                <a href="#contact" id="link">
                  contact
                </a>
                me.
              </p>
              <a href="#contact">Learn more</a>
            </div>
            <div class="column right">
              <div class="bars">
                <div class="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div class="line html"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>CSS</span>
                  <span>60%</span>
                </div>
                <div class="line css"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>JavaScript</span>
                  <span>50%</span>
                </div>
                <div class="line js"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Adobe Photoshop</span>
                  <span>50%</span>
                </div>
                <div class="line php"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Corel Draw</span>
                  <span>85%</span>
                </div>
                <div class="line mysql"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Qgis</span>
                  <span>90%</span>
                </div>
                <div class="line html"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Arcgis</span>
                  <span>90%</span>
                </div>
                <div class="line html"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="teams" id="teams">
        <div class="max-width">
          <h2 class="title">My Projects</h2>
          <div class="carousel owl-carousel">
            <div class="card">
              <div class="box">
                <img src="../pic/zepp.png" alt="img" />
                <div class="text">Sad zeppelins</div>
                <p>best figma course</p>
                <a
                  href="https://react-zepplins.vercel.app/"
                  class="project"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <img src="" alt="img" />
                <div class="text">Lorem</div>
                <p>lorem lorem lorem </p>
                <a href="https://" class="project" target="_blank">
                  View Project
                </a>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <img src="" alt="img" />
                <div class="text">Lorem</div>
                <p>lorem lorem lorem </p>
                <a href="https://" class="project" target="_blank">
                  View Project
                </a>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <img src="" alt="img" />
                <div class="text">Lorem</div>
                <p>lorem lorem lorem </p>
                <a href="https://" class="project" target="_blank">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact" id="contact">
        <div class="max-width">
          <h2 class="title">Contact me</h2>
          <div class="contact-content">
            <div class="column left">
              <div class="text">Get in Touch</div>
              <p>
                If you are interested in working together? Please fill out the
                form aside with some info about your project and I will get back
                to you as soon as I can. Please allow a couple days for me to
                respond.
              </p>
              <div class="icons">
                <div class="row">
                  <i class="fas fa-user"></i>
                  <div class="info">
                    <div class="head">Name</div>
                    <div class="sub-title">Munktur.Br</div>
                  </div>
                </div>
                <div class="row">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="info">
                    <div class="head">Address</div>
                    <div class="sub-title">Ulaanbaatar, Mongolia</div>
                  </div>
                </div>
                <div class="row">
                  <i class="fas fa-envelope"></i>
                  <div class="info">
                    <div class="head">Email</div>
                    <div class="sub-title">azuremunkhtur@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column right">
              <div class="text">Message me</div>
              <form action="#">
                <div class="fields">
                  <div class="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div class="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div class="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div class="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Message.."
                    required
                  ></textarea>
                </div>
                <div class="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <h2>
          <span class="typing-3"></span>
        </h2>

        <p>
          &copy; 2023{" "}
          <a href="https://github.com/BMunkhtur" target="_blank">
            Munkhtur
          </a>{" "}
          | All Rights Reserved |
        </p>
      </footer>
    </div>
  );
}

export default App;
