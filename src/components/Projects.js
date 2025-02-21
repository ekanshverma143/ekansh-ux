import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import mobileImg1 from "../assets/img/mobile-img1.png";
import mobileImg2 from "../assets/img/mobile-img2.png";
import mobileImg3 from "../assets/img/mobile-img3.png";
import designImg1 from "../assets/img/design-img1.png";
import designImg2 from "../assets/img/design-img2.png";
import designImg3 from "../assets/img/design-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Sorted",
      description: "Cmplete Ui/Ux for Brand Sorted",
      imgUrl: projImg1,
      link: "https://www.figma.com/proto/SiO1XymPSVCxmtHUokjE48/sorted-final-design?node-id=0-1&t=Aq714wZYIQVesT2T-1"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "#",
    },
  ];

  const mobileProjects = [
    {
      title: "Anocare",
      description: "UI/UX Design",
      imgUrl: mobileImg1,
      link: "#",
    },
    {
      title: "Mobile App 2",
      description: "Development",
      imgUrl: mobileImg2,
      link: "#",
    },
    {
      title: "Mobile App 3",
      description: "Prototyping",
      imgUrl: mobileImg3,
      link: "#",
    },


  ];

  const graphicDesignProjects = [
    {
      title: "Brand Identity",
      description: "Logo Design",
      imgUrl: designImg1,
      link: "#"
    },
    {
      title: "Marketing Materials",
      description: "Print Design",
      imgUrl: designImg2,
      link: "#",
    },
    {
      title: "Social Media",
      description: "Graphics Design",
      imgUrl: designImg3,
      link: "#",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          mobileProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          graphicDesignProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    
    </section>
  )
}
