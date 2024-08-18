import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";


export default function Navbarc() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbarClass mb-3">
          <Container fluid>
            {/* <Navbar.Brand href="#"><h1>Suresh S</h1></Navbar.Brand> */}
            <h1>Suresh S</h1>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="navbarClass"
            >
              <Offcanvas.Header closeButton style={{color:"white"}}>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navbarClass justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" className="navbar-link">About</Nav.Link>
                  <Nav.Link as={Link} to="/skills" className="navbar-link">Skills</Nav.Link>
                  <Nav.Link as={Link} to="/projects" className="navbar-link">Projects</Nav.Link>
                  <Nav.Link as={Link} to="/work" className="navbar-link">Experience</Nav.Link>
                  <Nav.Link as={Link} to='/contact' className="navbar-link">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
