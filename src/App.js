import logo from "./logo.svg";
import "./App.css";
import About from "./page/About";
import Contact from "./page/Contact";
import Education from "./page/Education";
import Exper from "./page/Exper";
import Work from "./page/Work";
import Navbarjs from "./page/About/Navbar";
import Skills from "./page/Skilss";

function App() {
  return (
    <div className="App">
      <Navbarjs />
      <About />
      <Contact />
      <Education />
      <Exper />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
