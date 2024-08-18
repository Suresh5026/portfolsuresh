import { Container, Row, Col, Button } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container fluid>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Col xs={12} md={4} className="text-center about mt-0">
            <div>
              <p>
                Hello, I am{" "}
                <span style={{ fontSize: "2rem" }}>
                  <strong>Suresh</strong>
                </span>{" "}
                , a web developer passionate about creating dynamic and
                user-friendly websites. After transitioning into web
                development, I've been honing my skills in modern web
                technologies and design. Always eager to explore new
                technologies and improve my skills. Worked on various projects
                to apply and enhance my knowledge.
              </p>
              <br />
              <div>
                <Button
                  href="https://drive.google.com/file/d/1iV3eG2I19lzW5O6mu1Xk5CMxSgsrJulQ/view"
                  variant="outline-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  <h5>Resume</h5>
                </Button>{" "}
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={5}
            className="d-flex justify-content-center align-items-center d-none d-md-block about"
          >
            <img src="/images/img3.png" alt="Suresh" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
