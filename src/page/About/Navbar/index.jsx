import navbarcss from "./style.css";
const Navbarjs = () => {
  return (
    <header>
      <a href="/" class="logo">
        <i class=""></i>B.Munkhtur
      </a>

      <div id="menu" class="fas fa-bars"></div>
      <nav class="navbar">
        <ul>
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbarjs;
