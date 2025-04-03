import React from 'react';

const EkanshResume = () => {
  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h3>Ekansh Verma - Resume for UI/UX Designer</h3>
      <iframe
        src="/UI_Ux_Resume_Ekansh.pdf"  // Make sure the resume is in public/
        width="100%"
        height="800px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default EkanshResume;
