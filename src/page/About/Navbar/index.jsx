import stylefive from "./stylefive.css";
const Navbarjs = () => {
  return (
    <div className="color">
      <header>
        <a href="/" class="logo">
          <i class=""></i>B.Munkhtur
        </a>
        <div id="menu" class="fas fa-bars"></div>
        <nav class="navbar">
          <ul>
            <li>
              <a href="/About">Home</a>
            </li>
            <li>
              <a href="/Contact">About</a>
            </li>
            <li>
              <a href="/Skills">Skills</a>
            </li>
            <li>
              <a href="/education">Education</a>
            </li>
            <li>
              <a href="/exper">Experience</a>
            </li>
            <li>
              <a href="/Work">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbarjs;
