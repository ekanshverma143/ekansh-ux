import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headerimg.png";
import { ArrowRightCircle, Eyeglasses } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["UI/UX Designer", "Product Designer", "Graphic Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/UI_Ux_Resume_Ekansh.pdf";
    link.download = "UI_Ux_Resume_Ekansh.pdf";
    link.click();
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className="glow-heading">{`Hi! I'm Ekansh `}
                    <span
                      className="txt-rotate"
                      data-period="500"
                      data-rotate='[" UI/UX Designer", " Product Designer", " Graphic Designer"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <ul className="glow-list">
                    <li>Designing intuitive experiences that make users go "Wow!"</li>
                    <li>Blending creativity with clean, functional code.</li>
                    <li>Crafting sleek interfaces, building responsive websites, and creating eye-catching graphics.</li>
                    <li>Turning ideas into visually stunning realities. Let’s create something extraordinary together!</li>
                  </ul>

                  <div className="button-group">
                    <button onClick={handleDownload} className="neon-button">
                      Download Resume <ArrowRightCircle size={25} />
                    </button>
                    <a
                      href="/ekanshresume"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button">
                      View Resume <Eyeglasses size={25} />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="glow-img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
