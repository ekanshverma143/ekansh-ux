import React from "react";
import { useNavigate } from "react-router-dom";
import projectImage from "../../assets/img/project-img4.png"; // Update with your actual image path

const Project4 = () => {
  const navigate = useNavigate();

  return (
    <div className="project-page-arcade">
      <h1 className="project-title-glow">Freelance Project: Website Ui for Home Stay (Jibhi, H.P.)</h1>

      <div className="project-image-wrapper">
        <img src={projectImage} alt="3D Portfolio" className="project-image" />
      </div>

      <div className="project-details-box">
        <p><strong>🎨 Designed by:</strong> Ekansh Verma</p>
        <p><strong>👨‍💻 Team of:</strong> 1 (Solo Project)</p>
        <p>
          <strong>🚀 Live Link:</strong>{" "}
          <a
            href="https://www.kudhalhomestay.vercel.app/"  // Replace with your live URL
            target="_blank"
            rel="noopener noreferrer"
            className="glow-link"
          >
            Visit Project ↗
          </a>
        </p>
        <p>
          <strong>📐 Figma File:</strong>{" "}
          <a
            href="https://www.figma.com/design/b851ls3cNBB7K549kCCCit/Sorted-Website?node-id=0-1&node-type=canvas&t=I8Oh3nBzijlIwL7e-0 "  // Replace with your Figma link
            target="_blank"
            rel="noopener noreferrer"
            className="glow-link"
          >
            Open in Figma ↗
          </a>
        </p>

        <p className="project-description">
          This project is an  freelance project , immersive, interactive website made for a home stay : Kudhal Home stay at jibhi , Himachal  , A set of 5-6 different design was made according to requirements of client. Designed to deliver a futuristic user experience across all devices.
        </p>
      </div>
      
      {/* Back to Home Button */}
      <button
        className="back-button-arcade"
        onClick={() => navigate("/#projects")}
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Project4;
