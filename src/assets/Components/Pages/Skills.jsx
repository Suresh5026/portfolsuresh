  import { Container, Row, Col } from "react-bootstrap";

  export default function Skills() {
    return (
      <Container fluid style={{ minHeight: "100vh" }} className="mt-3">
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "20vh" }}
        >
          <Col xs={12} className="text-center">
            <h1>Skills</h1>
            <p>I am a passionate MERN stack developer with a solid foundation in
                the skills below, eager to build dynamic and scalable web
                applications.</p>
          </Col>
        </Row>
        
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "38vh" }}
        >
          <Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
            <div className="boxes card-hover-zoom" >
              <div>
                <h4>Front End</h4>
                <div>
                  <ul>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
            <div className="boxes card-hover-zoom">
              <div>
                <h4>Back End</h4>
                <div>
                  <ul>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>MongoDB</li>
                    <li>MySQL & Oracle SQL</li>
                    <li>Mongoose</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
            <div className="boxes card-hover-zoom">
              <div>
                <h4>Tools and Softwares</h4>
                <div>
                  <ul>
                    <li>VS Code</li>
                    <li>Chrome</li>
                    <li>Postman</li>
                    <li>MongoDB Compass</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "20vh" }}
        >
          <Col xs={12} className="text-center">
            <h1>Education</h1>
            <h3>Electrical and Electronics Engineering - 6.796 CGPA</h3>
            <h6>(Sree Sowdambika College of Engineering, Aruppukottai)</h6>
          </Col>
        </Row>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "20vh" }}
        >
          <Col xs={12} className="text-center">
            <h1>Certification</h1>
            <h3>Full Stack Developer (MERN STACK)</h3>
            <h6>(GUVI IIT-M & IIM-A Incubated Ed-tech Company (Feb-24 to Jun-24))</h6>
          </Col>
        </Row>
      </Container>
    );
  }
