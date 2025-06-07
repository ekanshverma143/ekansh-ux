import figmaIcon from "../assets/img/arcade/figma.svg";
import framerIcon from "../assets/img/arcade/framer-block.svg";
import illustratorIcon from "../assets/img/arcade/paintbrush.svg";
import photoshopIcon from "../assets/img/arcade/photoshop.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Softwares = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill arcade-theme" id="softwares">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tools</h2>
              <p>🕹️ Software is just the joystick — creativity is the player.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={figmaIcon} alt="Figma Icon" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={framerIcon} alt="Framer Icon" />
                  <h5>Framer</h5>
                </div>
                <div className="item">
                  <img src={illustratorIcon} alt="Illustrator Icon" />
                  <h5>Adobe Illustrator</h5>
                </div>
                <div className="item">
                  <img src={photoshopIcon} alt="Photoshop Icon" />
                  <h5>Adobe Photoshop</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
