import React from "react";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skill from "./Skill";
import NavBar from "./NavBar";
import styled from "styled-components";
import GitHub from "./GitHub";
import { ScrollToTop } from "./ScrollToTop";

function Home() {
  return (
    <DIV id="home">
      <NavBar />
      <About />
      <Skill />
      <Project />
      <GitHub />
      <Contact />
      <ScrollToTop />
    </DIV>
  );
}

export default Home;

const DIV = styled.div`
  background-color: black;
  color: white;
`;
