import React, { useState } from "react";
import MyImage1 from "./downloads/MyImage1.png";
import styled from "styled-components";
import background from "./downloads/background.png";
import { Type } from "./Type";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import GitHub from "./GitHub";
import Contact from "./Contact";
import { ScrollToTop } from "./ScrollToTop";

export default function NavBar() {
  const [menuRight, setMenuRight] = useState("0px");

  const [menuOpen, setMenuOpen] = useState(false);

  const onButtonClick = () => {
    const pdfFile = "ABHISHEK_MISTRY_Resume.pdf";

    // Initiate the download by creating a temporary link and simulating a click event
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfFile;
    downloadLink.download = "ABHISHEK_MISTRY_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Open the downloaded PDF in a new tab
    window.open(pdfFile, "_blank");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="allComponents">
      <DIV isOpen={menuOpen}>
        <div id="nav-menu" className="sticky-menu">
          <h1>Abhishek</h1>
          {/* <img src="" alt="Website logo" className="logo" /> */}
          <div className={`menubar ${menuOpen ? "open" : ""}`}>
            <div className="sideBar">
              <a href="#home" className="nav-link home">
                Home
              </a>
              <a href="#about" className="nav-link about">
                About
              </a>
              <a href="#skills" className="nav-link skills">
                Skills
              </a>
              <a href="#projects" className="nav-link projects">
                Projects
              </a>
              <a href="#contact" className="nav-link contact">
                Contact
              </a>
              <button
                className="nav-link resume"
                id="resume-button-1"
                onClick={onButtonClick}
              >
                Resume
              </button>
              <svg
                className="close-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="white"
                viewBox="0 0 384 512"
                onClick={toggleMenu}
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
          </div>
          <svg
            className="hamburger-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            fill="white"
            viewBox="0 0 448 512"
            onClick={toggleMenu}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>

        <img
          className="dummyImg"
          style={{ height: "250px", marginTop: "20px" }}
          src="https://i.gifer.com/6M8G.gif"
          // src="https://www.taeyaar.com/wp-content/uploads/2022/09/Coding-and-Programming-Support.gif"
        />
        <div className="about center">
          <h1>
            Hi, I am <span className="about__name">Abhishek Mistry.</span>
          </h1>
          <Type />
          <p className="about__desc">
            A passionate Full Stack Software Developer having an experience of
            building Web applications with JavaScript / Reactjs / Nodejs /
            MongoDb and some other cool libraries and frameworks.
          </p>
        </div>
        <About />
        <Skill />
        <Project />
        <GitHub />
        <Contact />
        <ScrollToTop />
      </DIV>
    </div>
  );
}

const DIV = styled.div`
  /* padding: 10px 10%; */
  width: 100%;
  /* background-color: red !important; */
  /* background-color: black;
  color: white; */
  /* height: 1000vh; */

  .about {
    flex-direction: column;
    margin-top: 3em;
  }

  .about > :nth-child(2) {
    margin-top: 1.2em;
    font-size: 2rem;
    line-height: 1.2;
    color: var(--clr-fg-alt);
  }

  .about__desc {
    font-size: 1rem;
    max-width: 600px;
  }

  .about__desc,
  .about__contact {
    margin: auto;
    margin-top: 2.4em;
  }

  #resume-button-1 {
    /* display: block; */
    margin: 20px auto;
    /* width: fit-content; */
    background: transparent;
    /* background-color: black; */
    /* border: 1px solid #ff004f; */
    padding: 14px 20px;
    border-radius: 6px;
    text-decoration: none;
    color: white;
    transition: background 0.5s;
  }

  #resume-button-1:hover {
    cursor: pointer;
    border: 1px solid #ff004f;
  }

  #nav-menu {
    color: #ff004f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 5px 10%;
    background-color: #000000;

    /* position: fixed; */
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

  .about__name {
    color: #ff004f;
  }

  .close-icon,
  .hamburger-icon {
    display: none;
  }

  .sticky-menu {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #000000;
  }

  /* #############################------------------######### */

  @media screen and (max-width: 600px) {
    padding: 0px 3%;
    width: 100%;
    /* height: 100vh; */
    background-image: none;
    background-size: cover;
    background-position: center;
    background-color: black;
    color: white;

    .app .about {
      align-items: flex-start;
      margin-top: 2em;
      justify-content: center;
      align-items: center;
    }

    .about > :nth-child(2) {
      font-size: 1.5rem;
    }

    .close-icon,
    .hamburger-icon {
      display: block;
      font-size: 25px;
      position: absolute;
      top: 12px;
      right: 25px;
      cursor: pointer;
    }

    .header-text {
      font-size: 16px;
    }

    .header-text h1 {
      font-size: 30px;
    }

    .header-text h1 span {
      color: #ff004f;
    }

    .menubar {
      background: #262626;
      position: fixed;
      top: 0;
      right: ${(props) => (props.isOpen ? "0" : "-250px")};
      width: 200px;
      height: 100vh;
      /* padding-top: 50px; */
      display: flex;
      flex-direction: column; /* Center vertically */
      /* justify-content: center; */
      /* Center vertically */
      z-index: 2;
      transition: right 0.3s ease-in-out;
    }

    .menubar a,
    .menubar button {
      display: block;
      margin: 25px;
      text-align: start;
    }

    .sideBar {
      margin-top: 25px;
    }

    .about {
      flex-direction: column;
      margin-top: 3em;
      align-items: flex-start;
    }

    .menubar a,
    .menubar button {
      text-align: center;
    }

    .about > :nth-child(2) {
      margin-top: 1.2em;
      font-size: 2rem;
      line-height: 1.2;
    }
  }

  @media screen and (max-width: 480px) {
    background-color: rgb(0, 0, 0);
    color: white;
    width: 100%;

    .dummyImg {
      width: 80%;
    }
  }
`;
