import React from "react";
import { useNavigate } from "react-router-dom";
import projectImage from "../../assets/img/project-img1.png"; // Update with your actual image path

const Project1 = () => {
  const navigate = useNavigate();

  return (
    <div className="project-page-arcade">
      <h1 className="project-title-glow">UI Design for Sorted Technologies</h1>

      <div className="project-image-wrapper">
        <img src={projectImage} alt="Sorted Project" className="project-image" />
      </div>

      <div className="project-details-box">
        <p><strong>🎨 Designed by:</strong> Ekansh Verma</p>
        <p><strong>👨‍💻 Team of:</strong> 1 (Solo Project)</p>
        <p>
          <strong>🚀 Live Link:</strong>{" "}
          <a
            href="https://www.sortedtech.io/"
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
            href="https://www.figma.com/design/b851ls3cNBB7K549kCCCit/Sorted-Website?node-id=0-1&node-type=canvas"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-link"
          >
            Open in Figma ↗
          </a>
        </p>

        <p className="project-description">
          This project is an immersive, interactive website made for a tech company: Sorted Technologies.
          A set of 5-6 different designs was created based on the client's requirements, aimed at delivering
          a futuristic user experience across all devices.
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

export default Project1;
