import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Mail, Phone, Linkedin, Instagram, Users } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          {/* Icon Illustration */}
          <Col size={12} md={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Users size={150} style={{ color: '#14AD86' }} />
                  <h3 className="mt-3 fs-3 ">Let's Connect!</h3>
                  <p className="fs-6">Reach out and let's collaborate on something amazing.</p>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="fs-2">Get In Touch</h2>

                  <ul className="list-unstyled" style={{ padding: 0 }}>
                    <li className="d-flex align-items-center mb-3" style={{ transition: 'color 0.3s' }}>
                      <Mail size={30} style={{ color: '#14AD86' }} className="me-3" />
                      <a href="mailto:ekansh.verma@email.com" className="text-decoration-none  fs-5" style={{ color: '#14AD86' }} onMouseOver={e => e.currentTarget.style.color = '#0a7d5f'} onMouseOut={e => e.currentTarget.style.color = '#14AD86'}>
                        ekanshverma143@gmail.com
                      </a>
                    </li>

                    <li className="d-flex align-items-center mb-3" style={{ transition: 'color 0.3s' }}>
                      <Phone size={30} style={{ color: '#14AD86' }} className="me-3" />
                      <span className="fs-5" style={{ color: '#14AD86' }}>+91 80917 58143</span>
                    </li>

                    <li className="d-flex align-items-center mb-3">
                      <Linkedin size={30} style={{ color: '#14AD86' }} className="me-3" />
                      <a href="https://www.linkedin.com/in/ekanshverma143" target="_blank" rel="noopener noreferrer" className="text-decoration-none  fs-5">
                        linkedin.com/in/ekanshverma143
                      </a>
                    </li>

                    <li className="d-flex align-items-center" style={{ transition: 'color 0.3s' }}>
                      <Instagram size={30} style={{ color: '#14AD86' }} className="me-3" />
                      <a href="https://www.instagram.com/i_ekanshverma" target="_blank" rel="noopener noreferrer" className="text-decoration-none fs-5" style={{ color: '#14AD86' }} onMouseOver={e => e.currentTarget.style.color = '#14AD86'} onMouseOut={e => e.currentTarget.style.color = '#14AD86'}>
                        Ekansh Verma
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
