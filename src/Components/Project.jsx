import React from "react";
import styled from "styled-components";
import trendzy from "./downloads/Trendzy.jpg";
import fusion from "./downloads/fusion.jpg";
import homeDecor from "./downloads/HomeDecor.jpg";
import electroWeb from "./downloads/ElectroWeb.jpg"

function Project() {
  return (
    <DIV id="projects">
      <h1 className="sub-title">My Projects</h1>
      <div className="project-grid">
        <div className="project-card">
          <img src={trendzy} />
          <h1 className="project-title">Name</h1>
          <p className="project-description">description</p>
          <p className="project-tech-stack">tech-stack</p>
          <a href="" className="project-github-link">
            github
          </a>
          <br />
          <a href="" className="project-deployed-link">
            Deployed Link
          </a>
        </div>
        <div className="project-card">
          <img src={fusion} />
          <h1 className="project-title">Name</h1>
          <p className="project-description">description</p>
          <p className="project-tech-stack">tech-stack</p>
          <a href="" className="project-github-link">
            github
          </a>
          <br />
          <a href="" className="project-deployed-link">
            Deployed Link
          </a>
        </div>
        <div className="project-card">
          <img src={homeDecor} />
          <h1 className="project-title">Name</h1>
          <p className="project-description">description</p>
          <p className="project-tech-stack">tech-stack</p>
          <a href="" className="project-github-link">
            github
          </a>
          <br />
          <a href="" className="project-deployed-link">
            Deployed Link
          </a>
        </div>
        <div className="project-card">
          <img src={electroWeb} />
          <h1 className="project-title">Name</h1>
          <p className="project-description">description</p>
          <p className="project-tech-stack">tech-stack</p>
          <a href="" className="project-github-link">
            github
          </a>
          <br />
          <a href="" className="project-deployed-link">
            Deployed Link
          </a>
        </div>
      </div>
    </DIV>
  );
}

export default Project;

// Each project card in the Projects section should have class="project-card" and the following:
// Image of the project
// Title : class="project-title"
// Description : class="project-description"
// Tech stack used : class="project-tech-stack"
// Link to GitHub repository : class="project-github-link"
// Deployed link or video link : class="project-deployed-link"

const DIV = styled.div`
  border: 1px solid red;
  /* margin-top: 15px; */
  padding: 50px 0;

  .project-grid {
  }
`;
