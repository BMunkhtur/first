import Navbarjs from "../About/Navbar";
import stylethree from "./stylethree.css";
const Education = () => {
  return (
    <div>
      <Navbarjs />
      <section class="education" id="education">
        <h1 class="heading">
          <i class="fas fa-graduation-cap"></i> My <span>Education</span>
        </h1>

        <p class="qoute">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <img draggable="false" src="./pic/edu.jpg" alt="" />
            </div>
            <div class="content">
              <h3>Bachelor of Remote sensing</h3>
              <p>Mongolian National University | NUM</p>
              <h4>2013-2017 |</h4>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img draggable="false" src="./pic/edu.jpg" alt="" />
            </div>
            <div class="content">
              <h3>Master of Urdan Development</h3>
              <p>Mongolian National University | NUM</p>
              <h4>2017-2019 |</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
