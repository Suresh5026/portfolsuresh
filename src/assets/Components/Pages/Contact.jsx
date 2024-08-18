import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "40vh" }}
      >
        <Col xs={12} className="text-center">
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Contact</h1>
          <hr className="custom-hr1" />
        </Col>
      </Row>
      <Row
        style={{ minHeight: "20vh" }}
        className="justify-content-center align-items-center"
      >
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center align-items-center mb-3"
        >
          <Button
            href="mailto:suresh361994@gmail.com"
            variant="outline-primary"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineEmail size={24} style={{ marginRight: "8px" }} /> EMAIL
          </Button>
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center align-items-center mb-3"
        >
          <Button
            href="https://www.linkedin.com/in/tse-suresh-s/"
            variant="outline-info"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} style={{ marginRight: "5px" }} /> LINKEDIN
          </Button>
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center align-items-center mb-3"
        >
          <Button
            href="https://github.com/Suresh5026"
            variant="outline-light"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} style={{ marginRight: "8px" }} /> GITHUB
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
