import React from "react";
import resume from "./downloads/ABHISHEK_MISTRY_Resume.pdf";
import styled from "styled-components";
import background from "./downloads/background.png";

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
    <DIV>
      <div id="nav-menu">
        <img src="" alt="Website logo" className="logo" />
        <div>
          <a href="" className="nav-link home">
            Home
          </a>
          <a href="" className="nav-link about">
            About
          </a>
          <a href="" className="nav-link skills">
            Skills
          </a>
          <a href="" className="nav-link projects">
            Projects
          </a>
          <a href="" className="nav-link contact">
            Contact
          </a>
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
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="header-text">
          <p>Full Stack Web Developer</p>
          <h1>
            Hi, I'm <span>Abhishek</span>.
          </h1>
        </div>
        <div className="header-image">
          {/* <img src={image1} alt="" style={{ textAlign: "right" }} /> */}
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  padding: 10px 10%;
  width: 100%;
  height: 100vh;
  /* background-image: url('./downloads/MyImage1.png'); 
  */
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  /* border: 1px solid red; */

  #nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .logo {
    width: 140px;
  }

  div > a {
    display: inline-block;
    list-style: none;
    margin: 10px 20px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    position: relative;
  }

  div a::after {
    content: "";
    width: 0;
    height: 3px;
    background: #ff004f;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
  }

  div a:hover::after {
    width: 100%;
  }

  .header-text {
    text-align: left;
    margin-top: 20%;
    font-size: 30px;
  }

  .header-text h1 {
    font-size: 60px;
    margin-top: 20px;
  }

  .header-text h1 span {
    color: #ff004f;
  }
`;
