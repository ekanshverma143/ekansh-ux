import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

export const Projects = () => {
  const websiteProjects = [
    {
      title: "Sorted",
      description: "Complete UI/UX for Brand Sorted",
      imgUrl: projImg1,
      link: "#"
    },
    {
      title: "UI for Digital Twin",
      description: "Designed multiple pages for Digital Twin UI",
      imgUrl: projImg2,
      link: "#"
    },
    {
      title: "Qriocity - A case Study",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "#"
    },
  ];

  const mobileUI = [
    {
      title: "Kudhal Home Stay App",
      description: "Travel booking UI for mobile",
      imgUrl: projImg4,
      link: "#"
    },

  ];

  const graphicDesigns = [
    {
      title: "Engineering Concept Agent",
      description: "Graphics and branding UI",
      imgUrl: projImg1,
      link: "#"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="animate__animated animate__fadeIn">
              <h2>Projects</h2>
              <p>
                I began my design journey as a graphic designer during my first year of college.
                By my third year, I transitioned into UI/UX and web design, evolving into a graphic designer turned UI/UX specialist.
              </p>

              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-4 justify-content-center gap-3 glow-tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Websites UI</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Mobile UI</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Graphic Designs</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {websiteProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {mobileUI.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {graphicDesigns.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
