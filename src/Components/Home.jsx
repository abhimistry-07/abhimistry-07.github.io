import React from "react";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skill from "./Skill";
import NavBar from "./NavBar";
import styled from "styled-components";

function Home() {
  return (
    <DIV id="home">
      <NavBar />
      <About />
      <Skill />
      <Project />
      <Contact />
    </DIV>
  );
}

export default Home;

const DIV = styled.div`
  background-color: black;
  color: white;
`;
