import { Col, Container, Row } from "react-bootstrap";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";

export default function Home() {
  return (
    <>
      <Container fluid style={{ minHeight: "100vh" }}>
        <Row className="section" id="about">
          <About />
        </Row>
        <Row className="section" id="skills">
          <Skills />
        </Row>
        <Row className="section" id="projects">
          <Projects />
        </Row>
        <Row className="section" id="work">
          <Work />
        </Row>
        <Row className="section" id="contact">
          <Contact />
        </Row>
      </Container>
    </>
  );
}
