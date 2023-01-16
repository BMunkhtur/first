import Navbarjs from "../About/Navbar";
import stylefour from "./stylefour.css";
const Work = () => {
  return (
    <div>
      <section class="footer" id="contact">
        <Navbarjs />
        <div class="box-container">
          <div class="box">
            <h3>Portfolio</h3>
            <p>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials. <br /> <br /> Keep Rising 🚀. Connect with me
              over live chat!
            </p>
          </div>
          <div class="box">
            <h3>quick links</h3>
            <a href="#home">
              <i class="fas fa-chevron-circle-right"></i> home
            </a>
            <a href="#about">
              <i class="fas fa-chevron-circle-right"></i> about
            </a>
            <a href="#skills">
              <i class="fas fa-chevron-circle-right"></i> skills
            </a>
            <a href="#education">
              <i class="fas fa-chevron-circle-right"></i> education
            </a>
            <a href="#work">
              <i class="fas fa-chevron-circle-right"></i> work
            </a>
            <a href="#experience">
              <i class="fas fa-chevron-circle-right"></i> experience
            </a>
          </div>

          <div class="box">
            <h3>contact info</h3>

            <a
              href="https://www.linkedin.com/in/jigar-sable"
              class="fab fa-linkedin"
              aria-label="LinkedIn"
              target="_blank"
            ></a>
            <a
              href="https://github.com/jigar-sable"
              class="fab fa-github"
              aria-label="GitHub"
              target="_blank"
            ></a>
            <a
              href="mailto:jigarsable21@gmail.com"
              class="fas fa-envelope"
              aria-label="Mail"
              target="_blank"
            ></a>
            <a
              href="https://twitter.com/jigar_sable"
              class="fab fa-twitter"
              aria-label="Twitter"
              target="_blank"
            ></a>
            <a
              href="https://t.me/lifecode5"
              class="fab fa-telegram-plane"
              aria-label="Telegram"
              target="_blank"
            ></a>
          </div>
        </div>

        <h1 class="credit">
          Designed with <i class="fa fa-heart pulse"></i> by{" "}
          <a href="https://www.linkedin.com/in/jigar-sable"> </a>
        </h1>
      </section>
    </div>
  );
};
export default Work;
