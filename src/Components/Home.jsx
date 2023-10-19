import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import GitHub from "./GitHub";
import Contact from "./Contact";
import { ScrollToTop } from "./ScrollToTop";
import NavMenu from "./NavMenu";

function Home() {
  return (
    <div style={{ height: "100%" }}>
      <DIV id="home">
        {/* <NavMenu /> */}
        <NavBar />
        {/* <About />
        <Skill />
        <Project />
        <GitHub />
        <Contact />
        <ScrollToTop /> */}
      </DIV>
    </div>
  );
}

export default Home;

const DIV = styled.div`
  background-color: black;
  color: white;
`;
