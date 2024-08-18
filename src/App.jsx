import { Container, Row, Col } from "react-bootstrap";
import Navbarc from "./assets/Components/Navbarc";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Pages/Home";
import About from "./assets/Components/Pages/About";
import Projects from "./assets/Components/Pages/Projects";
import Skills from "./assets/Components/Pages/Skills";
import Work from "./assets/Components/Pages/Work";
import Contact from "./assets/Components/Pages/Contact";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Navbarc />
        </Row>
        <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Col>
            <Routes>
              <Route Component={Home} path="/" />
              <Route Component={About} path="/about" />
              <Route Component={Projects} path="/projects" />
              <Route Component={Skills} path="/skills" />
              <Route Component={Work} path="/work" />
              <Route Component={Contact} path="/contact" />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
