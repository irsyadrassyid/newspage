import React, { Component } from "react";
import About from "./About";
import Awards from "./Awards";
import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";
import Skill from "./Skill";

function PageContent() {
  const divstyle = {
    "margin-left": "17rem",
  };
  return (
    <div style={divstyle} className="container-fluid p-0">
      <About />
      <Experience />
      <Education />
      <Skill />
      <Interests />
      <Awards />
    </div>
  );
}

export default PageContent;
