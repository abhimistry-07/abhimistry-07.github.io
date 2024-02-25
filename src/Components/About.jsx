import React, { useState } from "react";
import MyImage1 from "./downloads/MyImage1.png";
import styled from "styled-components";
import NavBar from "./NavBar";

// /ABHISHEK_MISTRY_Resume

function About() {
  const [activeTab, setActiveTab] = useState("Technical Skills");

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

  function opentab(tabname) {
    setActiveTab(tabname);
  }

  return (
    <div id="about" className="about section">
      {/* <NavBar/> */}
      <DIV>
        <h1 className="about-heading">
          About <span>Me</span>
        </h1>
        <div className="row">
          <div className="col1">
            <img
              className="home-img"
              src={MyImage1}
              // src="https://i.pinimg.com/originals/ef/2d/b0/ef2db0885d94fd149a4b7914923bb2a3.gif"
              // src="https://i.gifer.com/6M8G.gif"
              // src="https://www.taeyaar.com/wp-content/uploads/2022/09/Coding-and-Programming-Support.gif"
              alt="My Image"
            />
          </div>
          <div className="col2">
            {/* <p id="user-detail-name">
              Diligent full-stack developer with comprehensive skills in data
              structures and algorithms, adept at employing generative AI in
              both solo and collaborative projects.
            </p> */}
            {/* Hello, My name is <span>Abhishek Mistry</span> and I enjoy
              creating thing that live on the internet. Full Stack Developer
              with hands on experience in building React Apps. */}

            {/* <br /> */}

            <p id="user-detail-intro">
              Results-oriented software engineer with a passion for creating
              robust and user-centric solutions. Excited to take on web
              development challenges to deliver impacts on user experience.
              Proficient in various web development technologies and tools,
              including HTML, CSS, JS, React, Redux, Node, Express, MongoDB, DSA
              with good problem solving skills.
            </p>
            <button id="resume-button-2" onClick={onButtonClick}>
              Resume
            </button>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "Technical Skills" ? "active-link" : ""
                }`}
                onClick={() => opentab("Technical Skills")}
              >
                Technical Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "Soft Skills" ? "active-link" : ""
                }`}
                onClick={() => opentab("Soft Skills")}
              >
                Soft Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "Education" ? "active-link" : ""
                }`}
                onClick={() => opentab("Education")}
              >
                Education
              </p>
            </div>
            <div
              className={`tab-content ${
                activeTab === "Technical Skills" ? "active-tab" : ""
              }`}
              id="Technical Skills"
            >
              <ul>
                <li>
                  <span>Frontend Development</span>
                  <br />
                  HTML5 | CSS3 | JavaScript | ReactJs
                </li>
                <li>
                  <span>Data Structure & Algorithms</span>
                  <br />
                  Arrays | Strings | Stacks | Queues | Linked List
                </li>
              </ul>
            </div>
            <div
              className={`tab-content ${
                activeTab === "Soft Skills" ? "active-tab" : ""
              }`}
              id="Soft Skills"
            >
              <ul>
                <li>
                  <span>Self-learning</span>
                  <br />
                  Having the skill of self-learning can greatly benefit a
                  developer at their workplace.
                </li>
                <li>
                  <span>Time management</span>
                  <br />
                  Being time-conscious can help a developer meet deadlines and
                  give exact estimates.
                </li>
                <li>
                  <span>Problem-solving skills</span>
                  <br />
                  It's about designing better UI, maintaining software systems,
                  or fixing bugs.
                </li>
              </ul>
            </div>
            <div
              className={`tab-content ${
                activeTab === "Education" ? "active-tab" : ""
              }`}
              id="Education"
            >
              <ul>
                <li>
                  <span>Full Stack Web Development</span>
                  <br />
                  Masai School, Bengaluru
                  <br />
                  August 2022 - present
                </li>
                <li>
                  <span>Bachelor in Automobile Engineering</span>
                  <br />
                  Marwadi Education Foundation Group of Institutions, Rajkot
                  <br />
                  June 2018 - April 2021
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DIV>
    </div>
  );
}

export default About;

const DIV = styled.div`
  margin: auto;
  padding: 30px;
  color: #ababab;
  font-size: 1.2em;
  background-color: black;
  color: white;

  .row {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .col1 {
    flex-basis: 35%;
  }

  .col1 img {
    height: 90%;
  }

  .home-img {
    border-radius: 10%;
  }

  .col2 {
    flex-basis: 60%;
    text-align: left;
  }

  .col2 p span {
    color: #ff004f;
  }

  .about-heading {
    font-size: 60px;
    font-weight: 600;
    color: white;
  }

  .about-heading span {
    color: #ff004f;
    /* font-size: 80px;
    font-weight: bold;
    color: #fff;
    width: 0ch;
    overflow: hidden;
    white-space: nowrap;
    animation: text2 3s infinite;
    border-right: 3px solid #fff;
    font-family: "Poppins", sans-serif; */
  }

  .tab-titles {
    display: flex;
    margin: 20px 0 40px;
  }

  .tab-links {
    color: white;
    margin-right: 50px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    font-size: large;
  }

  .tab-links:hover {
    color: #ff004f;
  }

  .tab-links::after {
    content: "";
    width: 0;
    height: 3px;
    background-color: #ff004f;
    position: absolute;
    left: 0;
    bottom: -8px;
    transition: 0.5s;
  }

  .tab-links.active-link::after {
    width: 50%;
  }

  .tab-content ul {
    display: grid;
    grid-template-columns: auto auto;
  }

  .tab-content ul li {
    list-style: none;
    margin: 10px 0;
    font-size: 14px;
  }

  .tab-content ul li span {
    color: #ff004f;
    font-size: 16px;
  }

  .tab-content {
    display: none;
  }

  .tab-content.active-tab {
    display: block;
  }

  #resume-button-2 {
    margin: 50px auto;
    width: fit-content;
    background-color: black;
    border: 1px solid #ff004f;
    padding: 14px 50px;
    border-radius: 6px;
    text-decoration: none;
    color: white;
    transition: background 0.5s;
  }

  #resume-button-2:hover {
    cursor: pointer;
    background: #ff004f;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding-top: 0px;

    #resume-button-2 {
      margin: 40px auto;
      padding: 10px 40px;
    }

    .about-heading {
      font-size: 40px;
    }

    .col1 {
      flex-basis: 100%;
      text-align: center;
    }

    .col1 img {
      width: 70%;
      height: auto;
      border-radius: 10%;
      margin-bottom: 20px;
    }

    .row {
      flex-direction: column;
    }

    .col1,
    .col2 {
      flex-basis: 100%;
      text-align: center;
    }

    .tab-links {
      font-size: 16px;
    }

    .user-detail-name,
    .user-detail-intro {
      font-size: 5px !important;
    }

    .tab-titles {
      margin: 10px 0 20px;
    }

    .tab-links {
      font-size: 14px;
      margin-right: 20px;
    }

    .tab-content.active-tab {
      font-size: 14px;
    }

    #TechnicalSkills ul {
      grid-template-columns: 1fr 1fr;
    }

    #TechnicalSkills ul li {
      font-size: 12px;
      margin: 5px 0;
    }

    #TechnicalSkills ul li span {
      font-size: 14px;
    }
  }
`;
