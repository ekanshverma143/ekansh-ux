import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import mob1 from "../assets/img/mobile-img1.png";
import gd1 from "../assets/img/design-img1.png";
import gd2 from "../assets/img/design-img2.png";
import gd3 from "../assets/img/design-img3.png";
import 'animate.css';

export const Projects = () => {
  const websiteProjects = [
    {
      title: "Sorted",
      description: "Complete UI/UX for Brand Sorted",
      imgUrl: projImg1,
      link: "projects/project1"
    },
    {
      title: "UI for Digital Twin",
      description: "Designed multiple pages for Digital Twin UI",
      imgUrl: projImg2,
      link: "projects/project2"
    },
    {
      title: "Qriocity - A case Study",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "projects/project3"
    },
     {
      title: "Website design for Home Stay",
      description: "A freelance project , I designed the interface for Booking, Checkin-Checkout for guests at Kudhal Home Stay",
      imgUrl: projImg4,
      link: "projects/project4"
    },
    {
      title: "Maruti Suzuki Warehouse Dashboard",
      description: "As part of cohret 4 of maruti suzuki accelerator program,I designed and developed this dashboard iterface for warehouse management with abckend team of Tecnod8.ai.",
      imgUrl: projImg5,
      link: "projects/project5"
    },
  ];

  const mobileUI = [
    {
      title: "Annocare a case study",
      description: "Healtcare app design",
      imgUrl: mob1,
      link: "projects/project6"
    },

  ];

  const graphicDesigns = [
    {
      title: "Design made on Adobe illustrator",
      description: "Graphics and branding UI",
      imgUrl: gd1,
      link: "#"
    },
      {
      title: "Design made on Adobe illustrator",
      description: "Graphics and branding UI",
      imgUrl: gd2,
      link: "#"
    },
      {
      title: "Design made on Adobe illustrator",
      description: "Graphics and branding UI",
      imgUrl: gd3,
      link: "#"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="row">
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
