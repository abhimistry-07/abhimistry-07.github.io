import React from "react";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skill from "./Skill";
import NavBar from "./NavBar";

function Home() {
  return (
    <div id="home">
      <NavBar />
      <About />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}

export default Home;
