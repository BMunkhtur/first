import stylefive from "./stylefive.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";

const Navbarjs = () => {
  return (
    <div className="color">
      <header>
        <a href="/" class="logo">
          <i class=""></i>B.Munkhtur
        </a>
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid className="menu">
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    B.Munkhtur
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="texttom">
                    <Nav.Link href="/About">Home</Nav.Link>
                    <Nav.Link href="/Contact">About</Nav.Link>
                    <Nav.Link href="/Skills">Skills</Nav.Link>
                    <Nav.Link href="/education">Education</Nav.Link>
                    <Nav.Link href="/exper">Experience</Nav.Link>
                    <Nav.Link href="/Work">Contact</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>
    </div>
  );
};

export default Navbarjs;
