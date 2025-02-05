import React from "react";

const experiences = [
  {
    date: "January 2023-Januray 2024",
    title: "UI/UX Lead - GDSC NITH",
    description: "Worked on front-end development and enhanced UI/UX for core applications.",
  },
  {
    date: "June 2023",
    title: "Freelance Project",
    description: "Developed a portfolio website using React and deployed it on Vercel.",
  },
  {
    date: "December 2023- April 2024",
    title: "UI/UX  Desinger - Dovetail Solutions",
    description: "Implemented responsive dashboards and optimized application performance.",
  },
  {
    date: "January 2025",
    title: "Ui desinger & Developer - Tecnod8.ai",
    description: "Led a project to develop an IoT-based home automation system using React.",
  },
];

export const Experience = () => {
  return (
    <section className="experience " id="experience">
    <div className="experience-container">
      <h2 className="experience-heading">Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{experience.title}</h3>
              <p className="timeline-date">{experience.date}</p>
              <p className="timeline-experince">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}


