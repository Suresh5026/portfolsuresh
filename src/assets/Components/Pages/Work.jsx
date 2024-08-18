import { Col, Container, Row } from "react-bootstrap";

export default function Work() {
  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "15vh" }}
      >
        <Col xs={12} className="text-center">
          <h1>Professional Experience</h1>
        </Col>
      </Row>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "25vh" }}
      >
        <Col xs={12} className="text-center">
          <h4>
            Computer Age ManageMent Services - Processing Officer (Oct-2016 to
            Jan-2023)
          </h4>
        </Col>

        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <ul>
            <li>
              Managed client-related communications, including handling emails
              and processing investor and distributor requests.
            </li>
            <li>
              Generated client-specific reports using Oracle SQL, ensuring
              accuracy and timely delivery.
            </li>
            <li>
              Performed data manipulation (DML) tasks in the database following
              hierarchy approvals, ensuring data integrity.
            </li>
          </ul>
        </Col>
      </Row>
      <Row style={{ minHeight: "10vh", color:"white" }}>
        <hr  className="custom-hr" />
      </Row>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "20vh" }}
      >
        <Col xs={12} className="text-center" style={{ minHeight: "8vh" }}>
          <h4>
            Globe Tier Info Tech Private Limited - Application Support Enginner (Apr-2023 to
            May-2023)
          </h4>
        </Col>

        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <ul>
            <li>
            Provided technical support for enterprise application systems, ensuring smooth operations.
            </li>
            <li>
            Analyzed technical issues to identify potential solutions and implemented resolutions.
            </li>
            <li>
            Provided technical support for enterprise application systems, ensuring smooth operations.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
