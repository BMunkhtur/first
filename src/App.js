import "./App.css";

import About from "./page/About";
import Contact from "./page/Contact";
import Education from "./page/Education";
import Exper from "./page/Exper";
import Work from "./page/Work";
import Navbarjs from "./page/About/Navbar";
import Skills from "./page/Skilss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbarjs />
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route exact path="/Navbarjs" element={<Navbarjs />} /> */}
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Education" element={<Education />} />
        <Route exact path="/Exper" element={<Exper />} />
        <Route exact path="/Skills" element={<Skills />} />
      </Routes>
      <Work />
    </div>
  );
}

export default App;
