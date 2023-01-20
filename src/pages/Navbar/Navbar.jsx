import React from "react";

const Navbar = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Navbar;
