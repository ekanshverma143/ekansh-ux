import React from "react";

const experiences = [
  {
    date: "January 2023 - January 2024",
    title: "UI/UX Lead - GDSC NITH",
    description: [
      "Served as the UI/UX Lead of GDSC NITH for the 2023-2024 term.",
      "Developed and implemented the UI/UX strategy for the team's projects and events.",
      "Conducted workshops on Figma and UI Designing.",
    ],
  },
  {
    date: "June 2023",
    title: "Freelance Project",
    description: [
      "Developed a portfolio website using React.",
      "Deployed the project on Vercel for seamless performance.",
    ],
  },
  {
    date: "December 2023 - April 2024",
    title: "UI/UX Designer - Dovetail Solutions",
    description: [
      "Implemented responsive dashboards.",
      "Designed logo for the company.",
      "Designed multiple landing pages.",
    ],
  },
  {
    date: "January 2025",
    title: "UI Designer & Developer - Tecnod8.ai",
    description: [
      "Desinged UI for digital twins platforms for industrial automation.",
      "Designed and Improved the UI/UX of the platform.",
      "Designed interactive UI components for an intuitive user experience.",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-heading">Experience</h2>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
            >
              <div className="timeline-content">
                <div className="timeline-circle" />
                <h3 className="timeline-title">{experience.title}</h3>
                <p className="timeline-date">{experience.date}</p>
                
                {/* 🔹 Check if description is an array or string */}
                {Array.isArray(experience.description) ? (
                  <ul className="timeline-description">
                    {experience.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="timeline-description">{experience.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
