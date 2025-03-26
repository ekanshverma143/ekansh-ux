import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/ekanshverma143/">
            <img src={navIcon1} alt="LinkedIn" />
          </a>
          <a href="https://www.behance.net/ekanshverma3">
            <img src={navIcon2} alt="Behance" />
          </a>
          <a href="instagram.com/i_ekanshverma">
            <img src={navIcon3} alt="Icon" />
          </a>
        </div>
        <p className="footer-text">© 2025, UI Design by Ekansh Verma</p>
      </div>
    </footer>
  );
};
