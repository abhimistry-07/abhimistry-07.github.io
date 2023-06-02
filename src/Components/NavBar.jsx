import React from "react";
import resume from "./downloads/ABHISHEK_MISTRY_Resume.pdf";
import styled from "styled-components";

export default function NavBar() {
  const onButtonClick = () => {
    fetch({ resume }).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "ABHISHEK_MISTRY_Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <DIV id="nav-menu">
      <p className="nav-link home">Home</p>
      <p className="nav-link about">About</p>
      <p className="nav-link skills">Skills</p>
      <p className="nav-link projects">Projects</p>
      <p className="nav-link contact">Contact</p>
      <button
        className="nav-link resume"
        id="resume-button-1"
        onClick={onButtonClick}
      >
        Resume
      </button>
      {/* <a href={resume} id="resume-link-1" target="_blank" download>
        Resume
      </a> */}
    </DIV>
  );
}

const DIV = styled.div`
  display: flex;
`;
