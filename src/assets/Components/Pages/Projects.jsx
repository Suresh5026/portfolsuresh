import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";

export default function Projects() {
  const [projects] = useState([
    {
      title: "Wedding Planner App",
      description:
        "Developed a full-stack Wedding Planner app utilizing ReactJS, NodeJS, Express JS, MongoDB, and React Bootstrap for seamless event management.",
      imgSrc: "/project/wedding.png",
      frontendLink: "https://github.com/Suresh5026/FronEndCapWedPlanApp.git",
      backendLink:
        "https://github.com/Suresh5026/BackendCapWedPlanAppEvent.git",
      liveLink: "https://loquacious-rugelach-b8460f.netlify.app",
    },
    {
      title: "Restaurant Booking App",
      description:
        "Developed a full-stack restaurant booking app using MERN stack, featuring dynamic restaurant listings, booking functionality, and admin management, with a responsive design.",
      imgSrc: "/project/restaurant.jpeg",
      frontendLink: "https://github.com/Suresh5026/resturantfrontendapp.git",
      backendLink: "https://github.com/Suresh5026/restaurantappbackend.git",
      liveLink: "https://ubiquitous-mousse-e69a4f.netlify.app",
    },
    {
      title: "Ecommerce App",
      description:
        "Developed an ecommerce app for men’s dresses using the MERN stack with features like product browsing, shopping cart, and secure checkout.",
      imgSrc: "/project/ecommerce.jpg",
      frontendLink: "https://github.com/Suresh5026/ecommercefrontend.git",
      backendLink: "https://github.com/Suresh5026/Ecommercebackend.git",
      liveLink: "https://unrivaled-granita-71b7e2.netlify.app/",
    },
    {
      title: "Doctor Appointment",
      description:
        "Designed and implemented a doctor appointment booking application using ReactJS, React-Bootstrap, CSS, NodeJS, ExpressJS, MongoDB, with secure authentication middleware.",
      imgSrc: "/project/doctor.jpg",
      frontendLink: "https://github.com/Suresh5026/doctorfrontend.git",
      backendLink: "https://github.com/Suresh5026/doctorApp.git",
      liveLink: "https://serene-capybara-8e195f.netlify.app",
    },
  ]);
  return (
    <Container fluid style={{ minHeight: "100vh" }} className="pe-3">
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "15vh" }}
      >
        <Col xs={12} className="text-center">
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={4} lg={3} className="d-flex mb-4">
            <Card style={{ width: "20rem" }} className="card-hover-zoom">
              <Card.Img
                variant="top"
                src={project.imgSrc}
                style={{
                  maxWidth: "100%",
                  maxHeight: "15rem",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Container>
                  <Row>
                    <Col className="text-center">
                      <h3>
                        <FaGithub />
                      </h3>
                    </Col>
                    <Col className="text-center">
                      <Card.Link
                        href={project.frontendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Frontend
                      </Card.Link>
                    </Col>
                    <Col className="text-center">
                      <Card.Link
                        href={project.backendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Backend
                      </Card.Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center">
                      <h3>
                        <FaDisplay />
                      </h3>
                    </Col>
                    <Col className="text-center">
                      <Card.Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Card.Link>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
