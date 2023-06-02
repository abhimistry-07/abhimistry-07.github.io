import React from "react";
import resume from "./downloads/ABHISHEK_MISTRY_Resume.pdf";
// /ABHISHEK_MISTRY_Resume

function About() {
    const onButtonClick = (th) => {
      // using Java Script method to get PDF file
      fetch("ABHISHEK_MISTRY_Resume.pdf").then((response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "ABHISHEK_MISTRY_Resume.pdf";
          alink.click();
        //   window.open("./downloads/ABHISHEK_MISTRY_Resume.pdf", "_blank");
        });
      });
    };

  return (
    <div id="about" className="about section">
      <h1>About me</h1>
      <p id="user-detail-name">Abhishek Mistry</p>
      <p id="user-detail-intro">
        Results-oriented software engineer with a passion for creating robust
        and user-centric solutions. Excited to take on web development
        challenges to deliver lasting impacts on user experience. Proficient in
        various web development technologies and tools, including HTML, CSS, JS,
        React, Redux, etc.
      </p>
      <img src="" alt="" className="home-img" />
      {/* <button id="resume-button-2" onClick={onButtonClick}>
        Resume
      </button> */}

      {/* <a href={resume} target="_blank" rel="noreferrer" download>
        Open First PDF
      </a> */}

      <br />

      <a href={resume} id="resume-link-2" target="_blank" download>
        Resume
      </a>
    </div>
  );
}

export default About;
