import joystickIcon from "../assets/img/arcade/joystick.svg";
import tetrisIcon from "../assets/img/arcade/tetris.svg";
import paletteIcon from "../assets/img/arcade/palette.svg";
import monitorIcon from "../assets/img/arcade/monitor.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill arcade-theme" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>🎯 Never 100%, but always leveling up!</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={joystickIcon} alt="Joystick Icon" />
                  <h5>UI/UX Designing</h5>
                </div>
                <div className="item">
                  <img src={tetrisIcon} alt="Tetris Icon" />
                  <h5>Wireframing</h5>
                </div>
                <div className="item">
                  <img src={paletteIcon} alt="Palette Icon" />
                  <h5>Graphic Designing</h5>
                </div>
                <div className="item">
                  <img src={monitorIcon} alt="Monitor Icon" />
                  <h5>Front-End Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
