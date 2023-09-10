import React from "react";
import styled from "styled-components";
import html from "./downloads/Html.svg";
import css from "./downloads/CSS.svg";
import js from "./downloads/JS.svg";
import react from "./downloads/React.svg";
import netlify from "./downloads/Netlify.png";
import vercel from "./downloads/vercel1.png";
import github from "./downloads/GitHub_Logo.svg";
import git from "./downloads/Git.png";
import redux from "./downloads/Redux.png";
import reactRouter from "./downloads/React Router.png";
// import git from "./downloads/Git.png";

function Skill() {
  return (
    <div id="skills">
      <DIV>
        <h1 className="skills-heading">Skills</h1>
        <div className="skills-grid">
          <div className="skills-card">
            <img src={html} alt="" className="skills-card-img" />
            <p className="skills-card-name">HTML</p>
          </div>
          <div className="skills-card">
            <img src={css} alt="" className="skills-card-img" />
            <p className="skills-card-name">CSS</p>
          </div>
          <div className="skills-card">
            <img src={js} alt="" className="skills-card-img" />
            <p className="skills-card-name">JavaScript</p>
          </div>
          <div className="skills-card">
            <img src={react} alt="" className="skills-card-img" />
            <p className="skills-card-name">React</p>
          </div>
          <div className="skills-card">
            <img src={redux} alt="" className="skills-card-img" />
            <p className="skills-card-name">Redux</p>
          </div>
          <div className="skills-card">
            <img src={github} alt="" className="skills-card-img" />
            <p className="skills-card-name">GitHub</p>
          </div>
          <div className="skills-card">
            <img src={git} alt="" className="skills-card-img" />
            <p className="skills-card-name">Git</p>
          </div>
          <div className="skills-card">
            <img src={reactRouter} alt="" className="skills-card-img" />
            <p className="skills-card-name">React Router</p>
          </div>
          <div className="skills-card">
            <img src={netlify} alt="" className="skills-card-img" />
            <p className="skills-card-name">Netlify</p>
          </div>
          <div className="skills-card">
            <img src={vercel} alt="" className="skills-card-img" />
            <p className="skills-card-name">Vercel</p>
          </div>
        </div>
      </DIV>
    </div>
  );
}

export default Skill;

// Each skills card in the Skills section should have class="skills-card" and the following:
// Image : class="skills-card-img"
// Name : class="skills-card-name"

const DIV = styled.div`
  /* border: solid red; */
  .skills-heading {
    font-size: 60px;
    font-weight: 600;
    color: white;
  }

  .skills-grid {
    margin-top: 60px;
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* border: 1px solid aqua; */
  }

  .skills-card {
    /* width: 140px; */
    /* border: 1px solid aqua; */
    /* background-color: white; */
    /* color: black; */
    width: 150px;
    margin: auto;
    padding: 10px;
    transition: transform 0.5s;

    --border-size: 1px;
    --border-angle: 0turn;

    background-image: conic-gradient(
        from var(--border-angle),
        #213,
        #112 50%,
        #213
      ),
      conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
    background-size: calc(100% - (var(--border-size) * 2))
        calc(100% - (var(--border-size) * 2)),
      cover;
    background-position: center center;
    background-repeat: no-repeat;

    animation: bg-spin 3s linear infinite;
    @keyframes bg-spin {
      to {
        --border-angle: 1turn;
      }
    }

    /* &:hover {
      animation-play-state: paused;
    } */
  }

  @property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
  }

  .skills-card:hover {
    transform: translateY(-10px);
  }

  .skills-card:hover {
    cursor: pointer;
  }

  .skills-card-img {
    float: center;
    width: 100px;
    height: 100px;
    /* object-fit: cover; */

    position: relative;
    transition: transform 0.3s ease;
    transform: translateX(0px);
  }

  .skills-card-img:hover {
    transform: translateX(10px);
  }

  .skills-card-name {
    /* margin-top: 15px; */
    padding: 10px;
  }
`;
